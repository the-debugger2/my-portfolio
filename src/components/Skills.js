import React from 'react';
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub
} from 'react-icons/fa';
import{ SiPhp,SiMysql, SiPostman, SiJupyter } from 'react-icons/si';
import { BiLogoTypescript, BiSolidZap } from "react-icons/bi";
import {DiNpm} from "react-icons/di";

const Skills = () => {
  const skills = [
    { id: 1, icon: <FaCss3Alt />, label: 'CSS' },
    { id: 2, icon: <FaHtml5 />, label: 'HTML' },
    { id: 3, icon: <FaReact />, label: 'React' },
    { id: 4, icon: <FaJava />, label: 'Java' },
    { id: 5, icon: <FaPython />, label: 'Python' },
    { id: 6, icon: <SiPhp />, label: 'PHP' },
    { id: 7, icon: <SiMysql />, label: 'MySQL' },
    { id: 8, icon: <BiLogoTypescript />, label: 'TypeScript' },
    { id: 9, icon: <FaGitAlt />, label: 'Git' },
    { id: 10, icon: <FaGithub />, label: 'GitHub' },
    { id: 11, icon: <SiPostman />, label: 'Postman' },
    { id: 12, icon: <BiSolidZap />, label: 'OWASP' },
    { id: 13, icon: <SiJupyter />, label: 'Jupyter' },
    { id: 14, icon: <DiNpm />, label: 'NPM' },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <h3> &#10004; Programming Languages, Frameworks and Tools</h3>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="skill-card"
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-label">{skill.label}</span>
          </div>
        ))}
      </div>
      <h3> &#10004; System Development</h3>
      <h3> &#10004; Web Development</h3>
      <h3> &#10004; Database Management</h3>
      <h3> &#10004; Object Oriented Programming</h3>
    </section>
  );
};

export default Skills;
