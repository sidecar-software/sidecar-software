import { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import bojan from '../../images/bojan.jpg';
import honza from '../../images/honza.jpg';
import karel from '../../images/karel.jpg';
import flavio from '../../images/flavio.jpg';
import kieran from '../../images/kieran.png';
import dan from '../../images/dan.jpeg';
import Appearable from '../components/appearable';
import { Globe2, ExternalLink, X } from 'lucide-react';
function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import './about.css';

export default function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  }, []);

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setLightboxOpen(true);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox();
      }
    };

    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [lightboxOpen, closeLightbox]);

  return (
    <Appearable>
      <Helmet>
        <title>About | Sidecar</title>
        <meta name="description" content="Meet the Sidecar team — seasoned engineers and former Elasticians based in Prague, serving clients across EMEA and North America. Official Elastic Services Partner since 2024." />
        <meta property="og:title" content="About | Sidecar" />
        <meta property="og:description" content="Meet the Sidecar team — seasoned engineers and former Elasticians based in Prague, serving clients across EMEA and North America." />
        <meta property="og:url" content="https://sidecar.software/#/about" />
      </Helmet>
      <div className="about_header">
        <h2>About Sidecar</h2>
        <div className="about_intro">
          <p>We're a tight-knit team of seasoned engineers based in Prague, with expertise spanning across Western Europe. Our distributed setup combines global technical excellence with personalized service.</p>
          <p>As an official <strong>Elastic Services Partner since 2024</strong>, we bring deep technical expertise to every engagement. Many of our team members are former Elasticians who worked at the company during its formative years, giving us unparalleled insight into the Elastic Stack and ecosystem.</p>
          <p>We primarily serve clients across EMEA and North America, but our capabilities extend worldwide.</p>
        </div>
      </div>

      <div className="team_section">
        <h2>Meet the Team</h2>
        <div className="team_grid">
        <div className="team_member">
          <div className="member_photo" onClick={() => openLightbox(bojan, "Bojan Jovanovic")}>
            <img src={bojan} alt="Bojan Jovanovic" />
          </div>
          <div className="member_info">
            <h3>Bojan Jovanovic</h3>
            <p className="member_role">Co-Founder & Software Developer</p>
            <p className="member_bio">Software developer with 15+ years of experience, passionate about building and scaling remote tech teams. Advocate for abstraction and simplicity in technology, always seeking efficient solutions to complex problems.</p>
            <p className="member_highlight">Founded kortechs.io, scaling it to 300+ employees over 8 years. Organizer of Python Belgrade meetups and PyCon Balkan conferences (2018, 2019).</p>
            <div className="member_links">
              <div className="social_links">
                <a href="https://www.linkedin.com/in/bojovanovic/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
                <a href="https://github.com/virogenesis" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={20} /></a>
              </div>
              <div className="external_links">
                <a href="https://www.youtube.com/channel/UC4Zfal_sduHM2sIT5Mm9cJA" target="_blank" rel="noopener noreferrer">PyCon Balkan <ExternalLink size={14} /></a>
                <a href="https://www.youtube.com/@pythonbelgrade9856" target="_blank" rel="noopener noreferrer">Python Belgrade <ExternalLink size={14} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="team_member">
          <div className="member_photo" onClick={() => openLightbox(honza, "Honza Král")}>
            <img src={honza} alt="Honza Král" />
          </div>
          <div className="member_info">
            <h3>Honza Král</h3>
            <p className="member_role">Co-Founder & Principal Engineer</p>
            <p className="member_bio">Veteran of the Elastic community since its early days, first as a developer and later as a consultant. Deep understanding of the Elastic Stack with a passion for helping clients maximize the value of their data.</p>
            <p className="member_highlight">After Elastic, explored roles as startup founder and platform engineer before returning to consulting—helping teams deliver projects successfully.</p>
            <div className="member_links">
              <div className="social_links">
                <a href="https://www.linkedin.com/in/honzakral/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
                <a href="https://github.com/honzakral" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={20} /></a>
                <a href="https://www.elastic.co/search-labs/author/honza-kral" target="_blank" rel="noopener noreferrer" aria-label="Blog"><Globe2 size={20} /></a>
              </div>
              <div className="external_links">
                <a href="https://www.youtube.com/watch?v=02XHM_XvsWs" target="_blank" rel="noopener noreferrer">Talk: Elasticsearch Beyond <ExternalLink size={14} /></a>
                <a href="https://www.youtube.com/watch?v=8zu7pomfopc" target="_blank" rel="noopener noreferrer">Talk: Django & Elasticsearch <ExternalLink size={14} /></a>
                <a href="https://www.youtube.com/watch?v=Htpbm68SVd8" target="_blank" rel="noopener noreferrer">Talk: Advanced Queries <ExternalLink size={14} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="team_member">
          <div className="member_photo" onClick={() => openLightbox(karel, "Karel Minařík")}>
            <img src={karel} alt="Karel Minařík" />
          </div>
          <div className="member_info">
            <h3>Karel Minařík</h3>
            <p className="member_role">Software Developer & Architect</p>
            <p className="member_bio">Seasoned developer and designer with 20+ years of experience building websites, web applications, and complex systems. Expertise spans clean design, robust backends, and balanced business-technical solutions.</p>
            <p className="member_highlight">Since joining Elastic in 2012, developed official Ruby and Go clients for Elasticsearch, building tools used by Facebook, TED.com, and Shopify. Taught programming and data visualization at Charles University in Prague.</p>
            <div className="member_links">
              <div className="social_links">
                <a href="https://www.linkedin.com/in/karelminarik/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
                <a href="https://github.com/karmi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={20} /></a>
              </div>
              <div className="external_links">
                <a href="https://nb.karmi.cz/semantic-search-with-elasticsearch/" target="_blank" rel="noopener noreferrer">Semantic Search with Elasticsearch <ExternalLink size={14} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="team_member">
          <div className="member_photo" onClick={() => openLightbox(flavio, "Flavio Percoco")}>
            <img src={flavio} alt="Flavio Percoco" />
          </div>
          <div className="member_info">
            <h3>Flavio Percoco</h3>
            <p className="member_role">Principal Engineer</p>
            <p className="member_bio">Director of Platform Engineering at FLYR for Hospitality, specializing in cloud infrastructure and technology leadership. Expert in transforming platform architectures, optimizing infrastructure costs, and implementing critical DevOps processes.</p>
            <p className="member_highlight">With experience at Red Hat and Elastic, excels in Kubernetes, multi-cloud strategies, and technical consulting for startup ecosystem development.</p>
            <div className="member_links">
              <div className="social_links">
                <a href="https://www.linkedin.com/in/fpercoco/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
                <a href="https://github.com/flaper87" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={20} /></a>
                <a href="http://www.flaper87.com" target="_blank" rel="noopener noreferrer" aria-label="Website"><Globe2 size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="team_member">
          <div className="member_photo" onClick={() => openLightbox(kieran, "Kieran Hall")}>
            <img src={kieran} alt="Kieran Hall" />
          </div>
          <div className="member_info">
            <h3>Kieran Hall</h3>
            <p className="member_role">Principal Engineer</p>
            <p className="member_bio">Principal Engineer with 18+ years supporting startups and established organisations across fintech, e-commerce, and platform engineering. Founder-level experience providing senior capacity and leadership for teams designing, stabilising, or evolving critical systems.</p>
            <p className="member_highlight">Extensive experience in search and observability using Elasticsearch and Apache Lucene, alongside frontend and platform architecture, distributed systems, and cloud infrastructure. Trusted advisor bridging product, engineering, and business concerns.</p>
            <div className="member_links">
              <div className="social_links">
                <a href="https://www.linkedin.com/in/kieranishere/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="team_member">
          <div className="member_photo" onClick={() => openLightbox(dan, "Dan Palmer-Bancel")}>
            <img src={dan} alt="Dan Palmer-Bancel" />
          </div>
          <div className="member_info">
            <h3>Dan Palmer-Bancel</h3>
            <p className="member_role">Principal Engineer</p>
            <p className="member_bio">Staff and Principal roles from seed-stage startups to global infrastructure and SaaS companies, including scaling through hypergrowth toward and beyond successful IPO at Elastic.</p>
            <p className="member_highlight">Technical leadership on critical projects including streaming infrastructure for the London 2012 Olympic Games and online operations for the BBC and the UK's major airports. Deep expertise across the platform stack, from architecture and cloud transformation through to security modelling, observability, and cost optimisation.</p>
            <div className="member_links">
              <div className="social_links">
                <a href="https://www.linkedin.com/in/danpalmerbancel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage && (
        <div className="lightbox_overlay" onClick={closeLightbox}>
          <button className="lightbox_close" onClick={closeLightbox} aria-label="Close lightbox">
            <X size={32} />
          </button>
          <div className="lightbox_content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox_image" />
            <p className="lightbox_caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </Appearable>
  );
}
