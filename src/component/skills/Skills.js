import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareBehance } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';



const skillsData = [
  {
    title: 'Frontend Development',
    items: [
      { icon: faSquareBehance, color: '#000000', title: 'React JS', level: 'Intermediate' },
      { icon: faSquareBehance, color: '#000000', title: 'HTML', level: 'Experienced' },
      { icon: faSquareBehance, color: '#000000', title: 'CSS', level: 'Experienced' },
      { icon: faSquareBehance, color: '#000000', title: 'JavaScript', level: 'Intermediate' },
      { icon: faSquareBehance, color: '#000000', title: 'Bootstrap', level: 'Intermediate' },
      { icon: faSquareBehance, color: '#000000', title: 'Material UI', level: 'Basic' },
    ],
  },
  {
    title: 'Backend Development',
    items: [
   
      { icon: faSquareBehance, color: '#000000', title: 'Node JS', level: 'Basic' },
      { icon: faSquareBehance, color: '#000000', title: 'Express JS', level: 'Basic' },
      { icon: faSquareBehance, color: '#000000', title: 'Git', level: 'Intermediate' },
      { icon: faSquareBehance, color: '#000000', title: 'Postman API', level: 'Basic' },
    ],
  },
  {
    title: 'Database',
    items: [
      { icon: faSquareBehance, color: '#000000', title: 'Firebase', level: 'Intermediate' },
      { icon: faSquareBehance, color: '#000000', title: 'MongoDB', level: 'Basic' },
    ],
  },
];

function Skills() {
  return (
    <section id="Skills">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="Skills-details-container">
        <div className="about-containers">
          {skillsData.map((category) => (
            <div className="details-container" key={category.title}>
              <h2 className="Skills-sub-title">{category.title}</h2>
              <div className="article-container">
                {category.items.map((skill) => (
                  <article key={skill.title}>
                    <FontAwesomeIcon
                      icon={skill.icon}
                      style={{ color: skill.color }}
                      className="icon"
                    />
                    <div>
                      <h3>{skill.title}</h3>
                      <p>{skill.level}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
     
      </div>
    </section>
  );
}

export default Skills;
