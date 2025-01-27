import { useState, ChangeEvent, FormEvent } from "react";
import Appearable from "../components/appearable";
import toast from 'react-hot-toast';

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
    const id = toast.loading("Sending message");
    const url = 'https://sidecartest.free.beeceptor.com';
    // const url = 'https://api.staticforms.xyz/submit';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: { 'Content-Type': 'application/json' }
    }).then(async (res) => {
        const data = await res.json();
        setResponse(data);

        if (res.ok) {
          toast.success(data.message, { id });
        } else {
          toast.error(data?.message || "Error sending mail", { id });
        }
    }).catch((error) => {
      console.error('Error:', error);
      toast.error("Error sending mail", { id });
    })
  };
  return (
    <Appearable>
      <title>Sidecar :: Contact Us</title>
      <div className='mx-auto w-full'>
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
                  <button type='submit' className={response.success ? 'success' : ''}>
                    Submit
                  </button>
              </div>
            </form>
          </div>
        </div>
    </Appearable>
  );
};