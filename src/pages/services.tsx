import Appearable from '../components/appearable';
import { Boxes, Cloud, Activity, GraduationCap, Box } from 'lucide-react';


export default function Services() {
  return (
	<Appearable>
	<title>Sidecar :: Services</title>

	<h2>Specialized expertise in Elastic products and data engineering</h2>

	<div className="team_grid">
		<div className="item">
			<h2>Architecture</h2>
			<Boxes size={64} />
			Expert guidance for your application design and infrastructure
			<ul>
				<li>Application architecture design</li>
				<li>Technical consulting services</li>
				<li>Strategic advisory</li>
				<li>Best practices implementation</li>
			</ul>
		</div>
		<div className="item">
			<h2>Deployment</h2>
			<Cloud size={64} />
			Seamless deployment using Infrastructure as Code
			<ul>
				<li>Cloud deployment expertise</li>
    			<li>On-premise solutions</li>
    			<li>Infrastructure as Code implementation</li>
    			<li>Automated deployment pipelines</li>
			</ul>
		</div>
		<div className="item">
			<h2>Health Check</h2>
			<Activity size={64} />
			Comprehensive evaluation of your application environment
			<ul>
				<li>Performance assessment</li>
				<li>System diagnostics</li>
				<li>Issue identification</li>
				<li>Optimization recommendations</li>
			</ul>
		</div>
		<div className="item">
			<h2>Education</h2>
			<GraduationCap size={64} />
			Custom workshops and training programs for your team
			<ul>
				<li>On-demand workshops</li>
				<li>Hands-on training sessions</li>
				<li>Customized learning paths</li>
				<li>Practical exercises and case studies</li>
			</ul>
		</div>
	</div>

	</Appearable>
  );
};