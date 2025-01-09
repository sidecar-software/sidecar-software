import bojan from '../../images/bojan.jpg';
import honza from '../../images/honza.jpg';

export default function About() {
  return (
    <>
      <h1>About Sidecar</h1>
      <p>At Sidecar, we’re a tight-knit team of engineers rooted in Prague and connected across Western Europe. 
        Our distributed setup allows us to bring global expertise with a local touch.</p>
      <p>We primarily serve clients across EMEA and North America, 
        but our capabilities know no borders — wherever you are, we’re ready to help.</p>
      <p>As a proud Elastic Services Partner since 2024, we bring unmatched expertise to the table. 
        Many of our team members are former Elasticians, having been with the company since its early days. 
        This unique experience gives us a deep understanding of Elastic’s technology and culture, ensuring we deliver solutions that truly resonate with your needs.</p> 

      <h2>The team</h2>
      <div className="flex-container" style={{ display: 'flex', gap: '20px' }}>
        <div className="team_member">
          <img src={bojan} alt="Team member" width={200} height={200} />
          <h3>Bojan Jovanovic</h3>
          <p>Some short description.</p>
        </div>
        <div className="team_member">
          <img src={honza} alt="Team member" width={200} height={200} />
          <h3>Honza Kral</h3>
          <p>Some short description.</p>
        </div>
      </div>
    </>
  );
}
