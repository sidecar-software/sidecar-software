import bojan from '../../images/bojan.jpg';
import honza from '../../images/honza.jpg';
import karel from '../../images/karel.jpg';
import flavio from '../../images/flavio.jpg';
import Appearable from '../components/appearable';
import { Github, Globe2, Linkedin, ExternalLink } from 'lucide-react';
import './about.css';

export default function About() {
  return (
    <Appearable>
      <title>Sidecar :: About</title>

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
          <div className="member_photo">
            <img src={bojan} alt="Bojan Jovanovic" />
          </div>
          <div className="member_info">
            <h3>Bojan Jovanovic</h3>
            <p className="member_role">Co-Founder & Software Developer</p>
            <p className="member_bio">Software developer with 15+ years of experience, passionate about building and scaling remote tech teams. Advocate for abstraction and simplicity in technology, always seeking efficient solutions to complex problems.</p>
            <p className="member_highlight">Founded kortechs.io, scaling it to 300+ employees over 8 years. Organizer of Python Belgrade meetups and PyCon Balkan conferences (2018, 2019).</p>
            <div className="member_links">
              <div className="social_links">
                <a href="https://www.linkedin.com/in/bojovanovic/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="https://github.com/virogenesis" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
              </div>
              <div className="external_links">
                <a href="https://www.youtube.com/channel/UC4Zfal_sduHM2sIT5Mm9cJA" target="_blank" rel="noopener noreferrer">PyCon Balkan <ExternalLink size={14} /></a>
                <a href="https://www.youtube.com/@pythonbelgrade9856" target="_blank" rel="noopener noreferrer">Python Belgrade <ExternalLink size={14} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="team_member">
          <div className="member_photo">
            <img src={honza} alt="Honza Král" />
          </div>
          <div className="member_info">
            <h3>Honza Král</h3>
            <p className="member_role">Co-Founder & Principal Engineer</p>
            <p className="member_bio">Veteran of the Elastic community since its early days, first as a developer and later as a consultant. Deep understanding of the Elastic Stack with a passion for helping clients maximize the value of their data.</p>
            <p className="member_highlight">After Elastic, explored roles as startup founder and platform engineer before returning to consulting—helping teams deliver projects successfully.</p>
            <div className="member_links">
              <div className="social_links">
                <a href="https://www.linkedin.com/in/honzakral/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="https://github.com/honzakral" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
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
          <div className="member_photo">
            <img src={karel} alt="Karel Minařík" />
          </div>
          <div className="member_info">
            <h3>Karel Minařík</h3>
            <p className="member_role">Software Developer & Architect</p>
            <p className="member_bio">Seasoned developer and designer with 20+ years of experience building websites, web applications, and complex systems. Expertise spans clean design, robust backends, and balanced business-technical solutions.</p>
            <p className="member_highlight">Since joining Elastic in 2012, developed official Ruby and Go clients for Elasticsearch, building tools used by Facebook, TED.com, and Shopify. Taught programming and data visualization at Charles University in Prague.</p>
            <div className="member_links">
              <div className="social_links">
                <a href="https://www.linkedin.com/in/karelminarik/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="https://github.com/karmi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
              </div>
              <div className="external_links">
                <a href="https://nb.karmi.cz/semantic-search-with-elasticsearch/" target="_blank" rel="noopener noreferrer">Semantic Search with Elasticsearch <ExternalLink size={14} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="team_member">
          <div className="member_photo">
            <img src={flavio} alt="Flavio Percoco" />
          </div>
          <div className="member_info">
            <h3>Flavio Percoco</h3>
            <p className="member_role">Principal Engineer</p>
            <p className="member_bio">Director of Platform Engineering at FLYR for Hospitality, specializing in cloud infrastructure and technology leadership. Expert in transforming platform architectures, optimizing infrastructure costs, and implementing critical DevOps processes.</p>
            <p className="member_highlight">With experience at Red Hat and Elastic, excels in Kubernetes, multi-cloud strategies, and technical consulting for startup ecosystem development.</p>
            <div className="member_links">
              <div className="social_links">
                <a href="https://www.linkedin.com/in/fpercoco/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="https://github.com/flaper87" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
                <a href="http://www.flaper87.com" target="_blank" rel="noopener noreferrer" aria-label="Website"><Globe2 size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Appearable>
  );
}
