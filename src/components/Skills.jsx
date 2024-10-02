import React from 'react';
import { FaCode, FaUserFriends } from 'react-icons/fa'; // Ejemplo de iconos

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-section">
        <div className="skill">
          <FaCode size={30} />
          <h3>Hard Skills</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Python</li>
            {/* Agrega más habilidades */}
          </ul>
        </div>
        <div className="skill">
          <FaUserFriends size={30} />
          <h3>Soft Skills</h3>
          <ul>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Adaptability</li>
            {/* Agrega más habilidades */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
