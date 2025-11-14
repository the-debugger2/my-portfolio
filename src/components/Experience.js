import React from 'react';
import apexLogo from '../Assets/Images/Apex-Logo.png';


const experienceData = [{
    id: 'exp-001',
    title: 'Intern',
    company: 'Lusaka Apex Medical University',
    startDate: '2024-12-02',
    endDate: '2025-02-28',
    location: 'Chalala, along the lusaka-kasama road',
    isCurrent: false,
    summary: 'I participated in an internship program at Lusaka Apex Medical University where I am gaining practical experience in my field of study.',
    responsibilities: [
        'Assisted in the maintenance of the university\'s IT infrastructure',
        'Furthered my understanding of software development practices',
        'Collaborated with faculty to create engaging course content',
        'Participated in code reviews and contributed to team knowledge sharing',
        'Gained exposure to various programming languages and development tools'
    ],
    technologies: ['React', 'TypeScript', 'PHP', 'MySQL', 'REST APIs', 'Git'],
    logo: apexLogo
},
{
    id: 'exp-002',
    title: 'Intern',
    company: 'Lusaka Apex Medical University',
    startDate: '2025-11-04',
    endDate: 'present',
    location: 'Chalala, along the lusaka-kasama road',
    isCurrent: true,
    summary: 'I am currently undertaking an internship at Lusaka Apex Medical University to further enhance my practical skills and industry knowledge.',
    responsibilities: [
        'Assisted in the maintenance of the university\'s IT infrastructure',
        'Furthered my understanding of software development practices',
        'Collaborated with faculty to create engaging course content',
        'Participated in code reviews and contributed to team knowledge sharing',
        'Gained exposure to various programming languages and development tools'
    ],
    technologies: ['Node.js', 'OWASP', 'React', 'PHP', 'PostMan', 'GitHub'],
    logo: apexLogo
}];

const ExperienceCard = ({ experience }) => {
    return (
        <section id="experience" className="experience-section">
        <div className="experience-card">
            <div className="experience-header">
                <img src={experience.logo} alt={`${experience.company} logo`} className="company-logo" />
                <div className="experience-title">
                    <h3>{experience.title}</h3>
                    <h4>{experience.company}</h4>
                    <p className="experience-duration">
                        {experience.startDate} - {experience.endDate} | {experience.location}
                    </p>
                </div>
            </div>
            <p className="experience-summary">{experience.summary}</p>
            <ul className="responsibilities-list">
                {experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
            <div className="technologies">
                {experience.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                ))}
            </div>
        </div>
        </section>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <h2 className="experience-heading">Professional Experience</h2>
            <div className="experience-grid">
                {experienceData.map((exp) => (
                    <ExperienceCard key={exp.id} experience={exp} />
                ))}
            </div>
        </section>
    );
};

export default Experience;