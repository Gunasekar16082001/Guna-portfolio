import React from 'react';
import './Project.css';
import img1 from '../../img/1.webp';
import img2 from '../../img/3.png';
import img3 from '../../img/4.webp';
import img4 from '../../img/5.png';


const projectData = [
  {
    image: img1,
    title: 'Gym website',
    description: 'Using the ReactJS framework',
    githubLink: 'https://github.com/Gunasekar16082001/Gym-web-DarkGym',
    liveDemoLink: 'https://dark-gym.netlify.app/'
  },
  {
    image: img2,
    title: 'TN tourism',
    description: 'Single page application using ReactJS',
    githubLink: 'https://github.com/Gunasekar16082001/Tn-toursim',
    liveDemoLink: 'https://tn-toursiam.netlify.app/'
  },
  {
    image: img3,
    title: 'Image search engine operator',
    description: 'Description for Project Three',
    githubLink: 'https://github.com/Gunasekar16082001/image-search-engine-opearater',
    liveDemoLink: 'https://image-search-engine-ryv.netlify.app/'
  },
  {
    image: img4,
    title: 'Tic-Tac-Toe GAME',
    description: 'Description for Project Three',
    githubLink: 'https://github.com/Gunasekar16082001/XO-game-gs',
    liveDemoLink: 'https://xo-game-gs.netlify.app/'
  },
 
];

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="project-containers">
            {projectData.map((project, index) => (
              <div className="details-container color-container" key={index}>
                <div className="article-container">
                  <img src={project.image} alt={`Project ${index + 1}`} className="project-img" />
                </div>
                <h2 className="experience-sub-title project-title">{project.title}</h2>
                <div className="btn-container">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">Github</button>
                  </a>
                  <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">Live Demo</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
