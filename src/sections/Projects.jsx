import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';
import './Projects.css';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      className="project"
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      data-cursor="hover"
    >
      <div
        className="project__glow"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}33, transparent 60%)` }}
      />
      <div className="project__head">
        <span className="project__index">{String(index + 1).padStart(2, '0')}</span>
        <span className="project__year">{project.year}</span>
      </div>
      <div className="project__visual" style={{ '--accent': project.color }}>
        {project.video ? (
          <video
            className="project__video"
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : project.image ? (
          <img
            className="project__video"
            src={project.image}
            alt={project.title}
            draggable={false}
          />
        ) : (
          <>
            <div className="project__visual-pattern" />
            <div className="project__visual-shape" />
          </>
        )}
        <span className="project__visual-label">{project.category}</span>
      </div>
      <h3 className="project__title">{project.title}</h3>
      <p className="project__desc">{project.description}</p>
      <ul className="project__tags">
        {project.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="project__links">
        <a href={project.link} target="_blank" rel="noreferrer" className="project__cta" data-cursor="hover">
          <span>View on GitHub</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="project__cta project__cta--live" data-cursor="hover">
            <span>Live demo</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Recent things I've shipped."
          description="A handful of recent collaborations — each one an experiment in turning briefs into bold, interactive experiences."
        />

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
