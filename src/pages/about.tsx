import bojan from '../../images/bojan.jpg';
import honza from '../../images/honza.jpg';
import karel from '../../images/karel.jpg';
import flavio from '../../images/flavio.jpg';
import Appearable from '../components/appearable';

export default function About() {
  return (
    <Appearable>
      <title>Sidecar :: About</title>
      <h2>About the team</h2>
      <p>At Sidecar, we’re a tight-knit team of engineers rooted in Prague and connected across Western Europe.
        Our distributed setup allows us to bring global expertise with a local touch.</p>
      <p>We primarily serve clients across EMEA and North America,
        but our capabilities know no borders — wherever you are, we’re ready to help.</p>
      <p>As a proud Elastic Services Partner since 2024, we bring unmatched expertise to the table.
        Many of our team members are former Elasticians, having been with the company since its early days.
        This unique experience gives us a deep understanding of Elastic’s technology and culture, ensuring we deliver solutions that truly resonate with your needs.</p>

      <h2>Meet the people</h2>
      <div className="team_grid">
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
          <h3> Karel Minařík</h3>
          <p>Software Developer & Architect</p>
          <p>Karel is a seasoned developer and designer with over two decades of experience building websites, web applications, and complex systems. Starting in 2000, his expertise spans clean design, robust backends, and balanced business-technical solutions.
          Since joining Elastic in 2012, he has developed official Ruby and Go clients for Elasticsearch and built tools used by Facebook, TED.com, and Shopify. A passionate contributor to open-source projects, Karel also taught programming and data visualization at Charles University in Prague.</p>
          <a href="https://nb.karmi.cz/semantic-search-with-elasticsearch/">Semantic Search with ElasticSearch</a>
        </div>
        <div className="team_member">
          <img src={flavio} alt="Team member" width={200} height={200} />
          <h3>Flavio Percoco</h3>
          <p>Flavio Percoco is a Director of Platform Engineering at FLYR for Hospitality, specializing in cloud infrastructure and technology leadership. He has transformed platform architectures, optimized infrastructure costs by 30%, and implemented critical DevOps processes. With prior experience at Red Hat and Elastic, he excels in Kubernetes, multi-cloud strategies, and technical consulting for startup ecosystem development.</p>
        </div>
      </div>
    </Appearable>
  );
}
