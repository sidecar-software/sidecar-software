import './partners.css';
import Appearable from "../components/appearable";
import kiwi from "../assets/kiwicom-logo.png";
import semgrep from "../assets/semgrep-logo.png"
import revsys from "../assets/revsys-logo.png"

export default function Partners() {
  return (
    <Appearable>
      <title>Sidecar :: Partners</title>

      <h2>Our partners, clients and friends</h2>
      <div className="team_grid">
        <div className="item">
          <h3>Kortechs s.r.o.</h3>
          <a href="https://kortechs.io/" target="_blank">Kortechs s.r.o.</a>
        </div>
        <div className="item">
          <h3>Elastic</h3>
          <a href="https://www.elastic.co/" target="_blank">Elastic</a>
        </div>
        <div className="item">
          <h3>kiwi.com</h3>
          <a href="https://www.kiwi.com/" target="_blank">
            <img src={kiwi} alt="kiwi.com" />
          </a>
        </div>
        <div className="item">
          <h3>Revsys</h3>
          <a href="https://www.revsys.com/" target="_blank">
            <img src={revsys} alt="revsys.com" />
          </a>
        </div>
        <div className="item">
          <h3>mcfarlane.com</h3>
          <a href="https://mcfarlane.com/" target="_blank">mcfarlane.com</a>
        </div>
        <div className="item">
          <h3>Semgrep</h3>
          <a href="https://semgrep.dev/" target="_blank">
            <img src={semgrep} alt="semgrep.dev" />
          </a>
        </div>
        <div className="item">
          <h3>Blueweb</h3>
          <a href="https://www.blueweb.sk/" target="_blank">Blueweb</a>
        </div>
      </div>
    </Appearable>
  );
}
