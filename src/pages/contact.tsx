import { useState, ChangeEvent, FormEvent } from "react";
import Appearable from "../components/appearable";
import './contact.css';

export default function ContactUs() {
  const url = 'https://sidecartest.free.beeceptor.com';
  // const url = 'https://api.staticforms.xyz/submit';

  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'Hi Sidecar !',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    replyTo: '@', // this will set replyTo of email to email address entered in the form
    accessKey: 'b46781db-e5bf-4285-b532-4e648de00436' // get your access key from https://www.staticforms.xyz
  });

  const [response, setResponse] = useState({
    success: false,
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: { 'Content-Type': 'application/json' }
    }).then(async (res) => {
      setResponse(await res.json());
    }).catch((error) => {
      console.log(error);
    })
  };
  return (
    <Appearable>
      <title>Sidecar :: Contact Us</title>
      <h2>Contact Form</h2>
      <form
        action={url}
        method='post'
        onSubmit={handleSubmit}
      >
        <label>Name</label>
        <input
          className='input'
          type='text'
          placeholder='Name'
          name='name'
          onChange={handleChange}
          required
        />
        <label>Your Email</label>
        <input
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='honeypot'
          style={{ display: 'none' }}
          onChange={handleChange}
        />
        <input
          type='hidden'
          name='subject'
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea
          className='textarea'
          placeholder='Your Message'
          name='message'
          onChange={handleChange}
          required
        />
        <button
          type='submit'
          className={`
                      btn 
                      btn-blue
                      ${response.success ? ' success' : ''}`}
          disabled={response.success}
        >
          Submit
        </button>
      </form>
    </Appearable>
  );
};