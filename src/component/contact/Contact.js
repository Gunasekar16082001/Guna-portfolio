import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='full-contact'>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <i className="fas fa-envelope"></i>
            <p>
              <a href="mailto:rgunasekar16082001@gmail.com?subject=rpy" target="_blank" rel="noopener noreferrer">
                rgunasekar16082001@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <i className="fab fa-linkedin"></i>
            <p>
              <a href="https://www.linkedin.com/in/gunasekar-r-b076981b9/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="box-container">
          <a href="https://www.google.com/maps/dir//9.9286571,78.1462116/@9.9286584,78.1455679,19z/data=!4m8!1m5!3m4!2zOcKwNTUnNDMuMiJOIDc4wrAwOCc0Ni40IkU!8m2!3d9.9286571!4d78.1462116!4m1!3e3?entry=ttu"  target="_blank" rel="noopener noreferrer">
            <div className="box">
              <i className="fas fa-home"></i>
              <h3>home address</h3>
              <span>madurai</span>
            </div>
          </a>
          <div className="box">
            <i className="fas fa-envelope"></i>
            <h3>email address</h3>
            <span>
              <a href="mailto:rgunasekar16082001@gmail.com?subject=rpy" target="_blank" rel="noopener noreferrer">
                send mail
              </a>
            </span>
          </div>
          <div className="box">
            <i className="fas fa-phone"></i>
            <h3>phone number</h3>
            <span>
              <a href="tel:+916374463809">+91 6374463809</a>
            </span>
          </div>
          <div className="box">
            <i className="fab fa-github"></i>
            <h3>Github</h3>
            <span>
              <a href="https://github.com/Gunasekar16082001" target="_blank" rel="noopener noreferrer">
                account
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
