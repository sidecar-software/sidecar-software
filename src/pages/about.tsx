import bojan from '../../images/bojan.jpg';
import honza from '../../images/honza.jpg';
import karel from '../../images/karel.jpg';
import flavio from '../../images/flavio.jpg';
import Appearable from '../components/appearable';

export default function About() {
  return (
    <Appearable>
      <h2>About the team</h2>
      <p>At Sidecar, we’re a tight-knit team of engineers rooted in Prague and connected across Western Europe.
        Our distributed setup allows us to bring global expertise with a local touch.</p>
      <p>We primarily serve clients across EMEA and North America,
        but our capabilities know no borders — wherever you are, we’re ready to help.</p>
      <p>As a proud Elastic Services Partner since 2024, we bring unmatched expertise to the table.
        Many of our team members are former Elasticians, having been with the company since its early days.
        This unique experience gives us a deep understanding of Elastic’s technology and culture, ensuring we deliver solutions that truly resonate with your needs.</p>

      <h2>Meet the people</h2>
      <div className="flex-container" style={{ display: 'flex', gap: '20px' }}>
        <div className="team_member">
          <img src={bojan} alt="Team member" width={200} height={200} />
          <h3>Bojan Jovanovic</h3>
<p>A software developer with over 10 years of experience in the IT industry, passionate about building and scaling remote tech teams.</p>
<p>An advocate for abstraction and simplicity in technology, always seeking efficient and innovative solutions to complex problems.</p>
<p>Organizer of Python Belgrade meetups for the past decade and PyCon Balkan conferences in 2018 and 2019. Founder of kortechs.io, which grew to over 300 employees in 8 years.</p>
        </div>
        <div className="team_member">
          <img src={honza} alt="Team member" width={200} height={200} />
          <h3>Honza Král</h3>
          <p>Honza is a veteran of the Elastic community, having been involved with the project since its early days, first as a developer and later as a consultant. He has a deep understanding of the Elastic Stack and is passionate about helping clients get the most out of their data.</p>
          <p>After leaving elastic he tried his luck as a startup founder and a platform engineer before returning to his passion - consulting and helping teams get their projects across the finish line.</p>
        </div>
        <div className="team_member">
          <img src={karel} alt="Team member" width={200} height={200} />
          <h3>Karel</h3>
          <p>Some short description.</p>
        </div>
        <div className="team_member">
          <img src={flavio} alt="Team member" width={200} height={200} />
          <h3>Flavio Percoco</h3>
          <p>Some short description.</p>
        </div>
      </div>
    </Appearable>
  );
}
