import './partners.css';
import Appearable from "../components/appearable";
import kiwi from "../assets/kiwicom-logo.png";
import semgrep from "../assets/semgrep-logo.png"
import revsys from "../assets/revsys-logo.png"
import mcfarlane from "../assets/mcfarlane-logo.webp"
import blueweb from "../assets/blueweb-logo.svg"
import elastic from "../assets/elastic-logo.svg"

export default function Partners() {
  return (
    <Appearable>
      <div className="partners_header">
        <h2>Trusted By Industry Leaders</h2>
        <p>Partnering with innovative organizations worldwide</p>
      </div>

      <div className="partners_grid">
        <a href="https://www.elastic.co/" target="_blank" rel="noopener noreferrer" className="partner_card partner_card--logo">
          <div className="partner_logo">
            <img src={elastic} alt="Elastic" />
          </div>
        </a>

        <a href="https://www.kiwi.com/" target="_blank" rel="noopener noreferrer" className="partner_card partner_card--logo">
          <div className="partner_logo">
            <img src={kiwi} alt="kiwi.com" />
          </div>
        </a>

        <a href="https://www.revsys.com/" target="_blank" rel="noopener noreferrer" className="partner_card partner_card--logo">
          <div className="partner_logo">
            <img src={revsys} alt="Revsys" />
          </div>
        </a>

        <a href="https://www.mcfarlaneaviation.com/" target="_blank" rel="noopener noreferrer" className="partner_card partner_card--logo">
          <div className="partner_logo">
            <img src={mcfarlane} alt="McFarlane Aviation" />
          </div>
        </a>

        <a href="https://semgrep.dev/" target="_blank" rel="noopener noreferrer" className="partner_card partner_card--logo">
          <div className="partner_logo">
            <img src={semgrep} alt="Semgrep" />
          </div>
        </a>

        <a href="https://www.blueweb.sk/" target="_blank" rel="noopener noreferrer" className="partner_card partner_card--logo">
          <div className="partner_logo">
            <img src={blueweb} alt="Blueweb" />
          </div>
        </a>
      </div>
    </Appearable>
  );
}
