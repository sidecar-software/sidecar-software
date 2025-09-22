import Appearable from '../components/appearable';
import { Boxes, Cloud, Activity, GraduationCap, Brain } from 'lucide-react';


export default function Services() {
  return (
	<Appearable>
	<title>Sidecar :: Services</title>

	<h2>Specialized expertise in AI, Elastic products and data engineering</h2>

	<div className="team_grid services">
		<div className="item">
			<h3><Boxes size={32} />Architecture</h3>
			<strong>Expert guidance for your application design and infrastructure</strong>
			<ul>
				<li>Application architecture design</li>
				<li>Technical consulting services</li>
				<li>Strategic advisory</li>
				<li>Best practices implementation</li>
			</ul>
		</div>
		<div className="item">
			<h3><Cloud size={32} />Deployment</h3>
			<strong>Seamless deployment using Infrastructure as Code</strong>
			<ul>
				<li>Cloud deployment expertise</li>
    			<li>On-premise solutions</li>
    			<li>Infrastructure as Code implementation</li>
    			<li>Automated deployment pipelines</li>
			</ul>
		</div>
		<div className="item">
			<h3><Activity size={32} />Health Check</h3>
			<strong>Comprehensive evaluation of your application environment</strong>
			<ul>
				<li>Performance assessment</li>
				<li>System diagnostics</li>
				<li>Issue identification</li>
				<li>Optimization recommendations</li>
			</ul>
		</div>
		<div className="item">
			<h3><GraduationCap size={32} />Education</h3>
			<strong>Custom workshops and training programs for your team</strong>
			<ul>
				<li>On-demand workshops</li>
				<li>Hands-on training sessions</li>
				<li>Customized learning paths</li>
				<li>Practical exercises and case studies</li>
			</ul>
		</div>
		<div className="item">
			<h3><Brain size={32} />AI</h3>
			<strong>Custom AI applications with advanced workflows and integrations</strong>
			<ul>
				<li>RAG implementation</li>
				<li>Agentic systems development</li>
				<li>MCP servers and clients</li>
				<li>Advanced AI workflows</li>
			</ul>
		</div>
	</div>

	</Appearable>
  );
};