import { useState, ChangeEvent, FormEvent } from "react";
import Appearable from "../components/appearable";


export default function ContactUs() {
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
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();
      setResponse(json);
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        success: false,
        message: 'An error occured while submitting the form'
      });
    }
  };
  return (
    <Appearable>
      <div className='mx-auto w-full'>
        <div
          className={
            response.success
              ? 'success-message'
              : 'hidden'
          }
        >
          <p>{response.message}</p>
        </div>
        <div
          className={
            !response.success
              ? 'failure-message'
              : 'hidden'
          }
        >
          <p>{response.message}</p>
        </div>
          <div>
            <h2>Contact Form</h2>
            <form
              action='https://api.staticforms.xyz/submit'
              method='post'
              onSubmit={handleSubmit}
            >
              <label>Name</label>
              <div>
                <input
                  className='input'
                  type='text'
                  placeholder='Name'
                  name='name'
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Your Email</label>
                <div>
                  <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='hidden'>
                <label>Title</label>
                <div>
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
                </div>
              </div>
              <div>
                <label>Message</label>
                <div>
                  <textarea
                    className='textarea'
                    placeholder='Your Message'
                    name='message'
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                  <button type='submit'>
                    Submit
                  </button>
              </div>
            </form>
          </div>
        </div>
    </Appearable>
  );
};