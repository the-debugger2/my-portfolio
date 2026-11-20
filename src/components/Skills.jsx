import React, { useEffect } from "react";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaChartBar,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiPhp,
  SiMysql,
  SiPostman,
  SiJupyter,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiPandas,
  SiFlutter,
  SiDart,
  SiUnity,
  SiLaravel
} from "react-icons/si";
import { DiNpm } from "react-icons/di";

// Skills grouped by what they're used for, based on the projects in the portfolio
const skillGroups = [
  {
    id: "web",
    title: "Web & Frontend",
    skills: [
      { icon: <FaHtml5 />, label: "HTML" },
      { icon: <FaCss3Alt />, label: "CSS" },
      { icon: <SiJavascript />, label: "JavaScript" },
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <FaReact />, label: "React" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Databases",
    skills: [
      { icon: <SiNodedotjs />, label: "Node.js" },
      { icon: <SiPhp />, label: "PHP" },
      { icon: <FaJava />, label: "Java" },
      { icon: <SiMysql />, label: "MySQL" },
      { icon: <SiPostgresql />, label: "PostgreSQL" },
      { icon: <SiSupabase />, label: "Supabase" },
      { icon: <SiLaravel />, label: "Laravel" },
    ],
  },
  {
    id: "mobile-game",
    title: "Mobile & Game Development",
    skills: [
      { icon: <FaMobileAlt />, label: "React Native" },
      { icon: <SiFlutter />, label: "Flutter" },
      { icon: <SiDart />, label: "Dart" },
      { icon: <SiUnity />, label: "Unity" },
    ],
  },
  {
    id: "data",
    title: "Data & Cloud",
    skills: [
      { icon: <FaPython />, label: "Python" },
      { icon: <SiPandas />, label: "pandas" },
      { icon: <SiJupyter />, label: "Jupyter / Colab" },
      { icon: <FaCloud />, label: "Azure Data Factory" },
      { icon: <FaDatabase />, label: "SQL Server" },
      { icon: <FaChartBar />, label: "Power BI" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Practices",
    skills: [
      { icon: <FaGitAlt />, label: "Git" },
      { icon: <FaGithub />, label: "GitHub" },
      { icon: <SiPostman />, label: "Postman" },
      { icon: <DiNpm />, label: "NPM" },
      { icon: <FaShieldAlt />, label: "OWASP" },
    ],
  },
];

const coreStrengths = [
  "System Development",
  "Web Development",
  "Mobile App Development",
  "Database Management",
  "Data Engineering & Analytics",
  "Machine Learning (CRISP-DM)",
  "Object Oriented Programming",
];

const Skills = () => {
  // Scroll-reveal: adds "is-visible" to each group once it enters the viewport
  useEffect(() => {
    const groups = document.querySelectorAll(".skills-group.reveal");

    if (!("IntersectionObserver" in window)) {
      groups.forEach((group) => group.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    groups.forEach((group) => observer.observe(group));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-intro">
        I build across the stack, from web and mobile apps to databases, data
        pipelines and games. Here is the toolkit I use most.
      </p>

      <div className="skills-groups">
        {skillGroups.map((group, index) => (
          <div
            key={group.id}
            className="skills-group reveal"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <h3 className="skills-group-title">{group.title}</h3>
            <ul className="skills-list">
              {group.skills.map((skill) => (
                <li key={skill.label} className="skill-chip">
                  <span className="skill-icon" aria-hidden="true">
                    {skill.icon}
                  </span>
                  <span className="skill-label">{skill.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="skills-concepts">
        <h3 className="skills-concepts-title">Core Strengths</h3>
        <ul className="concepts-list">
          {coreStrengths.map((item) => (
            <li key={item} className="concept-tag">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;