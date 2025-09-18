import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Appearable from "../components/appearable";
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
      <title>Sidecar :: Contact Us</title>
      <div className="contact-container">
        <h2>Contact Form</h2>
        
        <div className="contact-form">
          {response.message && (
            <div className={`form-message ${response.success ? 'success' : 'error'}`}>
              {response.success 
                ? 'Your message has been sent! We will get back to you soon.' 
                : response.message
              }
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name and Surname</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name and surname"
                name="name"
                value={contact.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email" 
                placeholder="your.email@address.com"
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

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                name="message"
                value={contact.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`submit-button ${response.success ? 'success' : ''}`}
              disabled={isSubmitting || response.success}
            >
              {isSubmitting ? 'Sending...' : response.success ? 'Sent ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </Appearable>
  );
}