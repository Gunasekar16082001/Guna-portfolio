import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin,  faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import Arr from'../../img/arrow.png';

import './Home.css';

function Home() {
  const iconStyle = { marginRight: '15px' };

  return (
    <div className='hero' id="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="content-header">
            <h1>Hi,</h1>
            <h1>I'm <span>Front-end Developer</span></h1>
            <p>Developing MERN stack projects with a primary focus on creating responsible and user-friendly websites using ReactJS, along with a solid understanding of Angular and Firebase..!</p>
          </div>
          <a href='https://drive.google.com/file/d/1h8CtHne-i9j_ACcH3ilophiCsB0oVCyr/view?usp=sharing'  target="_blank" rel="noopener noreferrer"><div className="content-btn">
            <button className="resume-btn">Resume</button>
          </div></a>
          <div className="social-icon-list">
  <a className='links-all' target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/ryv.guna/'>
    <FontAwesomeIcon icon={faFacebookSquare}  style={iconStyle} />
  </a>
  <a className='links-all' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/gunasekar-r-b076981b9/'>
    <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
  </a>
  <a className='links-all' target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/ryv_guna_s/'>
    <FontAwesomeIcon icon={faInstagramSquare} style={iconStyle} />
  </a>
  <a className='links-all' target="_blank" rel="noopener noreferrer" href='https://github.com/Gunasekar16082001'>
    <FontAwesomeIcon icon={faGithubSquare} style={iconStyle} />
  </a>
</div>
        </div>
        <img src={Arr} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='./#about'} />
      </div>
    </div>
  );
}

export default Home;
