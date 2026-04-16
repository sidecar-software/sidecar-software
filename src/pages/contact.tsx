import { useForm, ValidationError } from '@formspree/react';
import Appearable from "../components/appearable";
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';
import './contact.css';

export default function ContactUs() {
  const [state, handleSubmit] = useForm('mrerpgea');

  return (
    <Appearable>
      <div className="contact_header">
        <h2>Get In Touch</h2>
        <p>Have a question or want to work together? We'd love to hear from you.</p>
      </div>

      <div className="contact_container">
        {state.succeeded ? (
          <div className="contact_form contact_success">
            <CheckCircle size={48} />
            <h3>Message sent!</h3>
            <p>Thanks for reaching out. We'll get back to you shortly.</p>
          </div>
        ) : (
          <form className="contact_form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New message from sidecar.software" />

            <div className="form_group">
              <label htmlFor="name">
                <User size={18} />
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
              />
              <ValidationError field="name" errors={state.errors} className="field_error" />
            </div>

            <div className="form_group">
              <label htmlFor="email">
                <Mail size={18} />
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
              <ValidationError field="email" errors={state.errors} className="field_error" />
            </div>

            <div className="form_group">
              <label htmlFor="message">
                <MessageSquare size={18} />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project or inquiry..."
                required
                rows={6}
              />
              <ValidationError field="message" errors={state.errors} className="field_error" />
            </div>

            <ValidationError errors={state.errors} className="form_message error" />

            <button
              type="submit"
              className="submit_button"
              disabled={state.submitting}
            >
              {state.submitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
            </button>
          </form>
        )}
      </div>
    </Appearable>
  );
}
