import './partners.css';
import Appearable from "../components/appearable";
import kiwi from "../assets/kiwicom-logo.png";
import semgrep from "../assets/semgrep-logo.png"
import revsys from "../assets/revsys-logo.png"

export default function Partners() {
  return (
    <Appearable>
      <title>Sidecar :: Partners</title>

      <div className="partners_header">
        <h2>Trusted By Industry Leaders</h2>
        <p>Partnering with innovative organizations worldwide</p>
      </div>

      <div className="partners_grid">
        <a href="https://kortechs.io/" target="_blank" rel="noopener noreferrer" className="partner_card">
          <div className="partner_content">
            <span className="partner_name">Kortechs</span>
          </div>
        </a>

        <a href="https://www.elastic.co/" target="_blank" rel="noopener noreferrer" className="partner_card">
          <div className="partner_content">
            <span className="partner_name">Elastic</span>
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

        <a href="https://mcfarlane.com/" target="_blank" rel="noopener noreferrer" className="partner_card">
          <div className="partner_content">
            <span className="partner_name">McFarlane</span>
          </div>
        </a>

        <a href="https://semgrep.dev/" target="_blank" rel="noopener noreferrer" className="partner_card partner_card--logo">
          <div className="partner_logo">
            <img src={semgrep} alt="Semgrep" />
          </div>
        </a>

        <a href="https://www.blueweb.sk/" target="_blank" rel="noopener noreferrer" className="partner_card">
          <div className="partner_content">
            <span className="partner_name">Blueweb</span>
          </div>
        </a>
      </div>
    </Appearable>
  );
}
