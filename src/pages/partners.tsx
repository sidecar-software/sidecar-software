import { Helmet } from 'react-helmet-async';
import './partners.css';
import Appearable from "../components/appearable";
import kiwi from "../assets/kiwicom-logo.svg";
import semgrep from "../assets/semgrep-logo.svg"
import revsys from "../assets/revsys-logo.png"
import mcfarlane from "../assets/mcfarlane-logo.webp"
import blueweb from "../assets/blueweb-logo.svg"
import elastic from "../assets/elastic-logo.svg"

const partners = [
  { href: "https://www.elastic.co/",           logo: elastic,   alt: "Elastic",            domain: "elastic.co",            invert: false },
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
        <meta name="description" content="Sidecar works alongside industry leaders including Elastic, Kiwi.com, Semgrep, RevSys, and more. Trusted by companies across EMEA and North America." />
        <meta property="og:title" content="Partners | Sidecar" />
        <meta property="og:description" content="Sidecar works alongside industry leaders including Elastic, Kiwi.com, Semgrep, RevSys, and more." />
        <meta property="og:url" content="https://sidecar.software/#/partners" />
      </Helmet>
      <div className="partners_header">
        <h2>Trusted By Industry Leaders</h2>
        <p>Partnering with innovative organizations worldwide</p>
      </div>

      <div className="partners_grid">
        {partners.map(({ href, logo, alt, domain, invert }) => (
          <a key={domain} href={href} target="_blank" rel="noopener noreferrer" className="partner_card">
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
