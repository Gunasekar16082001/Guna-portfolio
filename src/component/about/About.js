import React, { useEffect, useRef } from "react";
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Guna from '../../img/Guna.jpg';


const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutSection = aboutRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add('about-visible');
        } else {
          aboutSection.classList.remove('about-visible');
        }
      });
    });

    observer.observe(aboutSection);

    return () => {
      observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <section id="about" ref={aboutRef}>
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={Guna}
            alt="Profile"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <FontAwesomeIcon className="icon" icon={faBriefcase} />
              <h3>Experience</h3>
              <p>Six months intern <br />Frontend Development</p>
            </div>
            <div className="details-container">
              <FontAwesomeIcon className="icon" icon={faGraduationCap} />
              <h3>Education</h3>
              <p>B.E. <br /> Mechanical engineering</p>
            </div>
          </div>
          <div className="text-container">
            <p>
Being a dedicated developer, I possess a strong drive for continuous learning and personal growth. Actively participating in hackathons and events organized by esteemed companies such as GitHub and Microsoft has allowed me to stay updated with the latest industry trends. Furthermore, I actively engage with the Madurai Tech Community, fostering connections and expanding my professional network. Notably, my experiences in various college events and hackathons have honed my teamwork and leadership abilities, enabling me to effectively collaborate and lead teams.
            </p>
          </div>
        </div>
      </div>
      {/* <img src={Arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='./#experience'} /> */}
    </section>
  );
};

export default About;
