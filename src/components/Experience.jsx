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
    summary: 'I participated in an internship program at Lusaka Apex Medical University where I supported the IT team and gained practical exposure to hardware and software systems.',
    responsibilities: [
        'Assisted with routine maintenance of computers and network equipment',
        'Helped troubleshoot hardware issues for staff and students',
        'Supported installation and configuration of basic software tools',
        'Observed and learned from senior staff during system upgrades',
        'Provided general technical support under supervision',
        'Gained exposure to various programming languages and tools'
    ],
    technologies: ['React', 'TypeScript', 'PHP', 'MySQL', 'REST APIs', 'Git'],
    logo: apexLogo
},
{
    id: 'exp-002',
    title: 'Intern',
    company: 'Lusaka Apex Medical University',
    startDate: '2025-11-04',
    endDate: '2026-04-16',
    location: 'Chalala, along the lusaka-kasama road',
    isCurrent: false,
    summary: 'I am currently undertaking an internship at Lusaka Apex Medical University, assisting with day-to-day IT operations and gaining further hands-on experience with hardware systems.',
    responsibilities: [
        'Helped with hardware setup and routine checks of lab equipment',
        'Assisted in diagnosing and fixing minor computer and peripheral issues',
        'Supported faculty with basic technical needs during classes',
        'Shadowed senior technicians during maintenance and repair tasks',
        'Learned to document issues and report them to supervisors',
        'Gained exposure to various programming languages and tools'
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