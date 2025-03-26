import { RiMap2Line, RiSendPlaneLine } from 'react-icons/ri';
import { RiUser3Line, RiMailLine, RiBook2Line } from 'react-icons/ri'
import './contact.css';
import { useState } from 'react';
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { EmailJSResponseStatus } from '@emailjs/browser';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [messageColor, setMessageColor] = useState();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessageColor('color-red');
      setFeedbackMessage('Please fill all the input fields');
      setTimeout(() => setFeedbackMessage(''), 3000);

      return;
    }

    emailjs
      .send('service_hmwx2jy', 'template_8pzqcku', formData, 'HKPOzVKOkzBih0E4k')
      .then(
        () => {
          setMessageColor('color-first');
          setFeedbackMessage('Message Sent!');
          setTimeout(() => setFeedbackMessage(''), 5000);

          setFormData({ name: '', email: '', subject: '', message: '' })
        },
        (error) => {
          alert('OOPS! SOMETHING WENT WRONG...', error);
        },
      );

  }

  return (
    <section className="contact section">
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container container grid">
        <div className="contact-content grid">
          <div className='contact-card'>
            <span className='contact-icon'>
              <RiMailLine />
            </span>
            <div>
              <h3 className='contact-title'>Email</h3>
              <div className='contact-data'>vdnikam@syr.edu</div>
            </div>
          </div>

          <div className='contact-card'>
            <span className='contact-icon'>
              <LiaLinkedin />
            </span>
            <div>
              <div className='contact-data'>
                <a href="https://www.linkedin.com/in/vaishnavi-nikam-102976200/">
                  <h3 className='contact-title'>LinkedIn</h3>
                </a>
              </div>
            </div>
          </div>

          <div className='contact-card'>
            <span className='contact-icon'>
              <FaGithub />
            </span>
            <div>
              <div className='contact-data'>
                <a href="https://github.com/vaishnavi-nikam924">
                  <h3 className='contact-title'>Github</h3>
                </a>
              </div>
            </div>
          </div>
        </div>

        <form action="" className='contact-form-grid' onSubmit={sendEmail}>
          <div className='contact-form-group grid'>
            <div className='contact-form-div'>
              <lable htmlFor='' className='contact-form-label'>
                Your Full Name <b>*</b>
              </lable>
              <input type='text' name='name' onChange={handleChange} value={formData.name} className='contact-form-input' />
            </div>

            <div className='contact-form-div'>
              <lable htmlFor='' className='contact-form-label'>
                Your Email Address <b>*</b>
              </lable>
              <input type='email' name='email' onChange={handleChange} value={formData.email} className='contact-form-input' />
            </div>
          </div>

          <div className='contact-form-div'>
            <lable htmlFor='' className='contact-form-label'>
              Your Subject <b>*</b>
            </lable>
            <input type='text' name='subject' onChange={handleChange} value={formData.subject} className='contact-form-input' />
          </div>

          <div className='contact-form-div'>
            <lable htmlFor='' className='contact-form-label'>
              Your Message <b>*</b>
            </lable>
            <textarea name="message" onChange={handleChange} value={formData.message} className='contact-form-input contact-form-area'></textarea>
          </div>
          <div className='contact-button'>
            <button className='button'>
              Send Message
              <span className='button-icon'>
                <RiSendPlaneLine />
              </span>
            </button>
          </div>

          {feedbackMessage && (
            <p className={`contact-message ${messageColor}`}>
              {feedbackMessage}
            </p>
          )}
        </form>
      </div>

    </section>
  )
}
export default Contact;
