import Appearable from '../components/appearable';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Boxes, Cloud, Activity, GraduationCap } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
	{
  	title: 'Architecture',
  	description: 'Expert guidance for your application design and infrastructure',
  	icon: Boxes,
  	features: [
    	'Application architecture design',
    	'Technical consulting services',
    	'Strategic advisory',
    	'Best practices implementation'
  	]
	},
	{
  	title: 'Deployment',
  	description: 'Seamless deployment using Infrastructure as Code',
  	icon: Cloud,
  	features: [
    	'Cloud deployment expertise',
    	'On-premise solutions',
    	'Infrastructure as Code implementation',
    	'Automated deployment pipelines'
  	] 
	},
	{
  	title: 'Health Check',
  	description: 'Comprehensive evaluation of your application environment',
  	icon: Activity,
  	features: [
    	'Performance assessment',
    	'System diagnostics',
    	'Issue identification',
    	'Optimization recommendations'
  	]
	},
	{
  	title: 'Education',
  	description: 'Custom workshops and training programs for your team',
  	icon: GraduationCap,
  	features: [
    	'On-demand workshops',
    	'Hands-on training sessions',
    	'Customized learning paths',
    	'Practical exercises and case studies'
  	]
	}
  ];

  return (
	<Appearable>
	<title>Sidecar :: Services</title>

	<h2>Specialized expertise in Elastic products and data engineering</h2>
  	<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    	{solutions.map((solution) => (
      	<Card key={solution.title} className="hover:shadow-lg transition-shadow">
        	<CardHeader>
          	<div className="mb-4">
            	<solution.icon className="w-12 h-12 text-blue-600" />
          	</div>
          	<CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
          	<CardDescription>{solution.description}</CardDescription>
        	</CardHeader>
        	<CardContent>
          	<ul className="space-y-2">
            	{solution.features.map((feature) => (
              	<li key={feature} className="flex items-center">
                	<div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
                	{feature}
              	</li>
            	))}
          	</ul>
        	</CardContent>
      	</Card>
    	))}
  	</div>
	</Appearable>
  );
};

export default SolutionsSection;
