import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/portfolio';
import './Certifications.css';

const watermarkItems = certifications.map((c) => c.title);

const half = Math.ceil(certifications.length / 2);
const row1 = certifications.slice(0, half);
const row2 = certifications.slice(half);

function CertCard({ cert, i }) {
  return (
    <div className="cert" data-cursor="hover">
      {cert.file && (
        <div className="cert__pdf" aria-hidden="true">
          <iframe
            src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            title={`${cert.title} certificate`}
            className="cert__pdf-frame"
            loading="lazy"
          />
        </div>
      )}
      <div className="cert__content">
        <div className="cert__top">
          <span className="cert__index">{String(i + 1).padStart(2, '0')}</span>
          <span className="cert__tag">{cert.tag}</span>
        </div>
        <h3 className="cert__title">{cert.title}</h3>
        <span className="cert__issuer">{cert.issuer}</span>
      </div>
      <div className="cert__shine" />
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certs" className="certs">
      {/* Scrolling watermark background */}
      <div className="certs__watermark" aria-hidden="true">
        <div className="certs__watermark-track">
          {[...watermarkItems, ...watermarkItems].map((name, i) => (
            <span key={i} className="certs__watermark-item">{name}</span>
          ))}
        </div>
        <div className="certs__watermark-track certs__watermark-track--reverse">
          {[...watermarkItems, ...watermarkItems].reverse().map((name, i) => (
            <span key={i} className="certs__watermark-item">{name}</span>
          ))}
        </div>
      </div>

      <div className="container">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & training."
          description="Formal credentials spanning networking, security, frontend and modern AI — hover any card to pause the scroll and bring the certificate to life."
        />
      </div>

      <div className="cert-marquee">
        <div className="cert-marquee__row">
          <div className="cert-marquee__track">
            {[...row1, ...row1].map((cert, i) => (
              <CertCard key={`r1-${i}`} cert={cert} i={i % row1.length} />
            ))}
          </div>
        </div>
        <div className="cert-marquee__row">
          <div className="cert-marquee__track cert-marquee__track--reverse">
            {[...row2, ...row2].map((cert, i) => (
              <CertCard key={`r2-${i}`} cert={cert} i={(i % row2.length) + row1.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
