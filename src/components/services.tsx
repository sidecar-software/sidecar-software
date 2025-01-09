import hourly_icon from '../assets/hourly_icon.webp';
import workshops from '../assets/workshops.webp';
import augmentation from '../assets/staff_aug.png';

export default function Services() {
    return <>
        <div>
        <h3>Consulting</h3>
        <img src={hourly_icon} alt="Hourly icon" width={64} height={64} />
        <p>You already have a team that implemented elasticsearch in your company
            everything is working just like you want it but there is a small problem that you need help with.</p> 
        <p>Let's jump on a 15min intro call and let our team talk to your technical leads and guide you in the right direction to get over that bump.</p>
    </div>
    <div>
        <h3>Workshops</h3>
        <img src={workshops} alt="Workshops" width={64} height={64} />
        <p>You’ve just implemented Elasticsearch, and it’s running smoothly — but now you want to take your team’s skills to the next level.</p> 
        <p>We can organize tailored daily or weekly workshops at your offices, designed to meet your specific needs. Our hands-on sessions will empower your team with the expertise they need to elevate their capabilities and maximize the value of your Elastic implementation.</p> 
        <p>Contact us for a quote.</p>
    </div>
    <div>
        <h3>Staff Augmentation</h3>
        <img src={augmentation} alt="Augmentation" width={64} height={64} />
        <p>If you're looking to enhance your team’s capabilities with proven, 
            in-depth Elastic engineering expertise, 
            our staff augmentation service is the ideal solution. 
            We provide access to our experienced professionals for engagements ranging from one month to one year, 
            offering the support and knowledge your team needs to succeed.</p> 
    </div>
    <div>
        <h3>SOW</h3>
        <img src={augmentation} alt="Hourly icon" width={64} height={64} />
        <p>Our Scope of Work fixed price offer is great if there is a piece of 
            functionality that you need architect and implementation
            let us scope out the work for you give you a quote and let us worry about how to implement this in the most efficient way possible.</p> 
    </div>
    
    </>
}


