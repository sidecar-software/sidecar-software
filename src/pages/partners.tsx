import './partners.css';
import Appearable from "../components/appearable";
import kiwi from "../assets/kiwicom-logo.svg";
import semgrep from "../assets/semgrep-logo.svg"
import revsys from "../assets/revsys-logo.png"
import mcfarlane from "../assets/mcfarlane-logo.webp"
import blueweb from "../assets/blueweb-logo.svg"
import elastic from "../assets/elastic-logo.svg"

const partners = [
  { href: "https://www.elastic.co/",           logo: elastic,   alt: "Elastic",           domain: "elastic.co"           },
  { href: "https://www.kiwi.com/",             logo: kiwi,      alt: "kiwi.com",           domain: "kiwi.com"             },
  { href: "https://www.revsys.com/",           logo: revsys,    alt: "RevSys",             domain: "revsys.com"           },
  { href: "https://www.mcfarlaneaviation.com/",logo: mcfarlane, alt: "McFarlane Aviation",  domain: "mcfarlaneaviation.com"},
  { href: "https://semgrep.dev/",              logo: semgrep,   alt: "Semgrep",            domain: "semgrep.dev"          },
  { href: "https://www.blueweb.sk/",           logo: blueweb,   alt: "Blueweb",            domain: "blueweb.sk"           },
];

export default function Partners() {
  return (
    <Appearable>
      <div className="partners_header">
        <h2>Trusted By Industry Leaders</h2>
        <p>Partnering with innovative organizations worldwide</p>
      </div>

      <div className="partners_grid">
        {partners.map(({ href, logo, alt, domain }) => (
          <a key={domain} href={href} target="_blank" rel="noopener noreferrer" className="partner_card">
            <div className="partner_logo">
              <img src={logo} alt={alt} />
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
