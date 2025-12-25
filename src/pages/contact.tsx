import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Appearable from "../components/appearable";
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import './contact.css';

export default function ContactUs() {
  const url = 'https://api.staticforms.xyz/submit';

  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'Hi Sidecar !',
    honeypot: '',
    message: '',
    replyTo: '@',
    accessKey: 'b46781db-e5bf-4285-b532-4e648de00436'
  });

  const [response, setResponse] = useState({
    success: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-hide success message after 3 seconds
  useEffect(() => {
    if (response.success) {
      const timer = setTimeout(() => {
        setResponse({
          success: false,
          message: ''
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [response.success]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });
      
      const result = await res.json();
      result.success = true;
      console.log('Result:', result);
      setResponse(result);
      
      if (result.success) {
        setContact({
          name: '',
          email: '',
          subject: 'Hi Sidecar !',
          honeypot: '',
          message: '',
          replyTo: '@',
          accessKey: 'b46781db-e5bf-4285-b532-4e648de00436'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponse({
        success: false,
        message: 'Došlo je do greške. Molimo pokušajte ponovo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Appearable>
      <title>Sidecar :: Contact</title>

      <div className="contact_header">
        <h2>Get In Touch</h2>
        <p>Have a question or want to work together? We'd love to hear from you.</p>
      </div>

      <div className="contact_container">
        {response.message && (
          <div className={`form_message ${response.success ? 'success' : 'error'}`}>
            {response.success
              ? 'Your message has been sent! We will get back to you soon.'
              : response.message
            }
          </div>
        )}

        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="name">
              <User size={18} />
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              name="name"
              value={contact.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="email">
              <Mail size={18} />
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              name="email"
              value={contact.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="honeypot"
            value={contact.honeypot}
            style={{ display: 'none' }}
            onChange={handleChange}
          />

          <input
            type="hidden"
            name="subject"
            value={contact.subject}
            onChange={handleChange}
          />

          <div className="form_group">
            <label htmlFor="message">
              <MessageSquare size={18} />
              Message
            </label>
            <textarea
              id="message"
              placeholder="Tell us about your project or inquiry..."
              name="message"
              value={contact.message}
              onChange={handleChange}
              required
              rows={6}
            />
          </div>

          <button
            type="submit"
            className={`submit_button ${response.success ? 'success' : ''}`}
            disabled={isSubmitting || response.success}
          >
            {isSubmitting ? (
              <>Sending...</>
            ) : response.success ? (
              <>Sent ✓</>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </Appearable>
  );
}