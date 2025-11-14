import React from "react";

const defaultEducation = [
  {
    degree: "Bachelor of Science in Computer Science (Software Engineering)",
    institution: "The University of Zambia (UNZA)",
    location: "Lusaka, Zambia",
    start: "2022",
    end: "Present",
    highlights: [
      "Currently pursuing Software Engineering specialization",
      "Engaged in practical software development projects"
    ]
  },
  {
    degree: "12th Grade Certificate",
    institution: "Arakan Boys Secondary School",
    location: "Lusaka, Zambia",
    start: "2018",
    end: "2020",
    highlights: [
      "Completed senior secondary education",
      "Grade 10 - 12 education"
    ]
  },
  {
    degree: "9th Grade Certificate",
    institution: "Holy Cross Convent School",
    location: "Lusaka, Zambia",
    start: "2017",
    end: "2017",
    highlights: [
      "Completed junior secondary education",
      "Achieved Grade 9 certification"
    ]
  },
  {
    degree: "7th Grade Certificate",
    institution: "Holy Cross Convent School",
    location: "Lusaka, Zambia",
    start: "2015",
    end: "2015",
    highlights: [
      "Completed middle school education",
      "Achieved Grade 7 certification"
    ]
  },
  {
    degree: "Primary Education",
    institution: "Holy Cross Convent School",
    location: "Lusaka, Zambia",
    start: "2009",
    end: "2014",
    highlights: [
      "Completed Grade 1 - 6",
      "Built strong academic foundation"
    ]
  }
];

export default function Education({ education = defaultEducation }) {
  return (
    <section id="education" aria-labelledby="education-heading" className="education-section">
      <h2 id="education-heading" className="education-heading">Education</h2>
      <div className="education-grid">
        {education.map((edu, idx) => (
          <article key={idx} className="education-card">
            <header className="education-card-header">
              <div>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">
                  {edu.institution}
                  {edu.location && <span className="education-location"> — {edu.location}</span>}
                </p>
              </div>
              <time className="education-dates">
                {edu.start}
                {edu.end ? ` — ${edu.end}` : ""}
              </time>
            </header>

            {edu.gpa && <p className="education-gpa"><strong>GPA:</strong> {edu.gpa}</p>}

            {edu.highlights?.length > 0 && (
              <ul className="education-list">
                {edu.highlights.map((hl, i) => (
                  <li key={i} className="education-list-item">{hl}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
