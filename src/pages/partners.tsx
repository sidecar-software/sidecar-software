import { Helmet } from 'react-helmet-async';
import './partners.css';
import Appearable from "../components/appearable";
import kiwi from "../assets/kiwicom-logo.svg";
import semgrep from "../assets/semgrep-logo.svg"
import revsys from "../assets/revsys-logo.png"
import mcfarlane from "../assets/mcfarlane-logo.webp"
import blueweb from "../assets/blueweb-logo.svg"
import elastic from "../assets/elastic-logo.svg"
import opensearchFoundation from "../assets/opensearch-foundation-logo.png"
import linuxFoundation from "../assets/linux-foundation-logo.svg"

const featuredPartners = [
  { href: "https://www.elastic.co/",           logo: elastic,   alt: "Elastic",            domain: "elastic.co",                invert: false, role: "Official Partner" },
  { href: "https://foundation.opensearch.org/", logo: opensearchFoundation, alt: "OpenSearch Software Foundation", domain: "foundation.opensearch.org", invert: true,  role: "Member" },
  { href: "https://www.linuxfoundation.org/",  logo: linuxFoundation, alt: "The Linux Foundation", domain: "linuxfoundation.org", invert: true,  role: "Member" },
];

const companies = [
  { href: "https://www.kiwi.com/",             logo: kiwi,      alt: "kiwi.com",            domain: "kiwi.com",              invert: false },
  { href: "https://www.revsys.com/",           logo: revsys,    alt: "RevSys",              domain: "revsys.com",            invert: true  },
  { href: "https://www.mcfarlaneaviation.com/",logo: mcfarlane, alt: "McFarlane Aviation",  domain: "mcfarlaneaviation.com", invert: false },
  { href: "https://semgrep.dev/",              logo: semgrep,   alt: "Semgrep",             domain: "semgrep.dev",           invert: false },
  { href: "https://www.blueweb.sk/",           logo: blueweb,   alt: "Blueweb",             domain: "blueweb.sk",            invert: false },
];

export default function Partners() {
  return (
    <Appearable>
      <Helmet>
        <title>Partners | Sidecar</title>
        <meta name="description" content="Sidecar is an official Elastic partner and a member of the OpenSearch Software Foundation and the Linux Foundation. We've also worked with Kiwi.com, Semgrep, RevSys, and more across EMEA and North America." />
        <meta property="og:title" content="Partners | Sidecar" />
        <meta property="og:description" content="Sidecar is an official Elastic partner and a member of the OpenSearch Software Foundation and the Linux Foundation." />
        <meta property="og:url" content="https://sidecar.software/#/partners" />
      </Helmet>
      <div className="partners_header">
        <h2>Trusted By Industry Leaders</h2>
        <p>Partnering with innovative organizations worldwide</p>
      </div>

      <div className="partners_grid partners_grid--featured">
        {featuredPartners.map(({ href, logo, alt, domain, invert, role }) => (
          <a key={domain} href={href} target="_blank" rel="noopener noreferrer" className="partner_card partner_card--featured">
            <span className="partner_role_badge">{role}</span>
            <div className="partner_logo">
              <img src={logo} alt={alt} className={invert ? 'img_invert' : ''} />
            </div>
            <span className="partner_link">
              <span className="partner_link_arrow">↗</span>
              {domain}
            </span>
          </a>
        ))}
      </div>

      <div className="companies_header">
        <h3>Companies We've Worked With</h3>
      </div>

      <div className="partners_grid partners_grid--companies">
        {companies.map(({ href, logo, alt, domain, invert }) => (
          <a key={domain} href={href} target="_blank" rel="noopener noreferrer" className="partner_card partner_card--compact">
            <div className="partner_logo">
              <img src={logo} alt={alt} className={invert ? 'img_invert' : ''} />
            </div>
            <span className="partner_link">
              <span className="partner_link_arrow">↗</span>
              {domain}
            </span>
          </a>
        ))}
      </div>
    </Appearable>
  );
}
