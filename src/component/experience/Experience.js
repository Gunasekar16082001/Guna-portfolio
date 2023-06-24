import React from 'react';
import './Experience.css';


class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: true,
    };
  }

  handleButtonClick = (showDetails) => {
    this.setState({ showDetails });
  };

  render() {
    const { showDetails } = this.state;

    return (
      <section className="experience" id="experience">
        <div className="heading">
        <p>Education &</p>
          <h1>Experience </h1>
        
        </div>

        <div className="container">
         
          <div className="content">
            <div className="flex">
              <span
                className={`details-btn ${showDetails ? 'active' : ''}`}
                onClick={() => this.handleButtonClick(true)}
              >
                experience
              </span>
              <span
                className={`skills-btn ${!showDetails ? 'active' : ''}`}
                onClick={() => this.handleButtonClick(false)}
              >
            education
              </span>
            </div>
            <div className="column">
              <div className={`details ${showDetails ? 'active' : ''}`}>
                <h3>Company: Mavencart</h3>
               <p>Role: Software developer intern</p>
               <br></br>
                <p>
                I have been employed as a software developer intern at Mavencart for a duration of six months. During this period, I had the privilege of making significant contributions to a real-time project for Caratlane.com. This invaluable experience allowed me to enhance the user interface through the development of single-page applications, including a dedicated festival page. Moreover, I acquired invaluable knowledge pertaining to back-end systems and cloud platforms. My unwavering passion for web and application development has consistently fueled my ambition for a thriving career in the IT industry. Actively participating in real-time projects and improving UI designs has further sharpened my skills. In recognition of my efforts, my previous company provided me with a monthly stipend of 18k.
                </p>
                <div className="content-btn">
         <a href='https://drive.google.com/file/d/1W8hzAcwgfRV4kVsS0XVppS3LlrsUUlUu/view?usp=sharing' target="_blank" rel="noopener noreferrer" > <button className="resume-btn">Intern certificate </button></a>
        </div>
              </div>
              <div className={`details ${!showDetails ? 'active' : ''}`}>
              <h3>Degree: Bachelor of Engineering</h3>
               <p>College: Velammal college of engineering and technology</p><br></br>
               <p>
              
I am completed my Bachelor's degree in Mechanical Engineering from Velammal College of Engineering and Technology in Madurai. Throughout my academic journey, I have consistently demonstrated excellence, maintaining a commendable CGPA of 8.1. Alongside my studies, I have actively participated in numerous college events and hackathons, which have significantly refined my abilities in teamwork and leadership.
In addition, I am an enthusiastic member of the Madurai Tech Community, where I engage in hackathons and events organized by industry leaders like GitHub and Microsoft. This active involvement has instilled in me a passion for continuous learning, constantly driving me to acquire new skills and broaden my knowledge base.
               </p>
              </div>
            </div>
          </div>
       
        </div>
  
      </section>
    );
  }
}

export default Experience;
