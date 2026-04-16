import Appearable from '../components/appearable';
import { GraduationCap, Wrench, Search, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './services.css';

export default function Services() {
  const navigate = useNavigate();

  return (
    <Appearable>

      <div className="services_intro">
        <p className="services_eyebrow">How we work</p>
        <h2>We solve hard problems.<br />Two ways.</h2>
        <p className="services_lead">
          Whether your team needs to level up their skills or you need an expert partner
          to carry a project across the finish line — we show up, roll up our sleeves, and get it done.
        </p>
      </div>

      {/* WORKSHOPS */}
      <div className="service_track">
        <div className="service_track_header">
          <div className="service_track_icon">
            <GraduationCap size={32} />
          </div>
          <div>
            <p className="service_track_label">Track 01</p>
            <h3>Workshops</h3>
            <p className="service_track_pricing">Fixed cost &mdash; one week, on-site</p>
          </div>
        </div>

        <div className="service_track_body">
          <p className="service_track_description">
            We come to you. Spend a week embedded with your team, audit your
            infrastructure end-to-end, and leave with every gap closed and every
            engineer confident in what they're running.
          </p>
          <p className="service_track_description">
            Right now we offer one focused workshop: <strong>Elasticsearch &amp; OpenSearch</strong>.
            If your cluster is slowing you down, costing too much, or just feels like
            a black box — this is where it changes.
          </p>

          <div className="service_track_features">
            <div className="service_feature">
              <Search size={18} />
              <div>
                <strong>Elasticsearch &amp; OpenSearch</strong>
                <span>The only workshop we run, and we run it deep.</span>
              </div>
            </div>
            <div className="service_feature">
              <CheckCircle size={18} />
              <div>
                <strong>Infrastructure review</strong>
                <span>We audit your cluster, mappings, shard strategy, and query patterns.</span>
              </div>
            </div>
            <div className="service_feature">
              <CheckCircle size={18} />
              <div>
                <strong>Best practices, applied</strong>
                <span>Not a slide deck. We fix issues in your actual environment.</span>
              </div>
            </div>
            <div className="service_feature">
              <CheckCircle size={18} />
              <div>
                <strong>Team training</strong>
                <span>Your engineers leave knowing why, not just how.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="service_track_cta">
          <button className="cta_button" onClick={() => navigate('/contact')}>
            Book a workshop <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="services_divider">
        <span>or</span>
      </div>

      {/* CONSULTING */}
      <div className="service_track service_track--consulting">
        <div className="service_track_header">
          <div className="service_track_icon">
            <Wrench size={32} />
          </div>
          <div>
            <p className="service_track_label">Track 02</p>
            <h3>Consulting</h3>
            <p className="service_track_pricing">Fixed cost or flexible rates &mdash; scoped to your problem</p>
          </div>
        </div>

        <div className="service_track_body">
          <p className="service_track_description">
            You have a problem. We architect the solution, build it, and hand it off
            production-ready. Or we work alongside your team for as long as you need us.
            Either way, we own the outcome with you.
          </p>
          <p className="service_track_description">
            From a greenfield platform to a legacy system that needs saving — ops, custom
            software, cloud infrastructure, on-prem, hybrid — if there's a job to get done,
            we figure out how to get it done.
          </p>

          <div className="service_track_features">
            <div className="service_feature">
              <CheckCircle size={18} />
              <div>
                <strong>Architecture &amp; system design</strong>
                <span>We blueprint the right solution before a single line of code is written.</span>
              </div>
            </div>
            <div className="service_feature">
              <CheckCircle size={18} />
              <div>
                <strong>Custom software development</strong>
                <span>End-to-end delivery, from spec to shipped.</span>
              </div>
            </div>
            <div className="service_feature">
              <CheckCircle size={18} />
              <div>
                <strong>Infrastructure &amp; ops</strong>
                <span>Cloud, on-prem, hybrid. Terraform, Pulumi, Kubernetes, CI/CD — whatever the stack demands.</span>
              </div>
            </div>
            <div className="service_feature">
              <CheckCircle size={18} />
              <div>
                <strong>Flexible engagement</strong>
                <span>Fixed-scope project or ongoing support. We match how you need to work.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="service_track_cta">
          <button className="cta_button" onClick={() => navigate('/contact')}>
            Start a conversation <ArrowRight size={18} />
          </button>
        </div>
      </div>

    </Appearable>
  );
}
