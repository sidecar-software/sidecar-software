import Appearable from '../components/appearable';
import { Boxes, Cloud, Activity, GraduationCap, Brain } from 'lucide-react';
import './services.css';

export default function Services() {
  return (
	<Appearable>
	<title>Sidecar :: Services</title>

	<div className="services_header">
		<h2>Expert Solutions for Modern Infrastructure</h2>
		<p>Specialized expertise in AI, Elastic products, and data engineering</p>
	</div>

	<div className="services_grid">
		<div className="service_card">
			<div className="service_icon">
				<Boxes size={36} />
			</div>
			<h3>Architecture & Consulting</h3>
			<p className="service_description">Design scalable, resilient systems with expert guidance on application architecture and infrastructure planning.</p>
			<ul className="service_features">
				<li>Application architecture design</li>
				<li>Technical consulting</li>
				<li>Strategic planning and advisory</li>
				<li>Best practices implementation</li>
			</ul>
		</div>

		<div className="service_card">
			<div className="service_icon">
				<Cloud size={36} />
			</div>
			<h3>Cloud & Infrastructure</h3>
			<p className="service_description">Deploy and manage your infrastructure efficiently with modern cloud solutions and Infrastructure as Code.</p>
			<ul className="service_features">
				<li>Cloud-native deployments</li>
				<li>On-premise and hybrid solutions</li>
				<li>Infrastructure as Code (Terraform, Pulumi)</li>
				<li>CI/CD pipeline automation</li>
			</ul>
		</div>

		<div className="service_card">
			<div className="service_icon">
				<Activity size={36} />
			</div>
			<h3>System Health Checks</h3>
			<p className="service_description">Comprehensive evaluation and optimization of your systems to ensure peak performance and reliability.</p>
			<ul className="service_features">
				<li>Performance analysis and tuning</li>
				<li>System diagnostics and monitoring</li>
				<li>Bottleneck identification</li>
				<li>Actionable optimization roadmaps</li>
			</ul>
		</div>

		<div className="service_card">
			<div className="service_icon">
				<GraduationCap size={36} />
			</div>
			<h3>Training & Workshops</h3>
			<p className="service_description">Empower your team with custom training programs tailored to your technology stack and business needs.</p>
			<ul className="service_features">
				<li>Custom workshops and bootcamps</li>
				<li>Hands-on technical training</li>
				<li>Role-based learning paths</li>
				<li>Real-world case studies</li>
			</ul>
		</div>

		<div className="service_card">
			<div className="service_icon">
				<Brain size={36} />
			</div>
			<h3>AI & Machine Learning</h3>
			<p className="service_description">Build intelligent applications with cutting-edge AI technologies, from RAG systems to autonomous agents.</p>
			<ul className="service_features">
				<li>RAG (Retrieval-Augmented Generation)</li>
				<li>Agentic AI systems</li>
				<li>MCP server and client development</li>
				<li>Custom AI workflow orchestration</li>
			</ul>
		</div>
	</div>

	</Appearable>
  );
};