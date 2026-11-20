import React, { useEffect } from "react";

const defaultEducation = [
  {
    degree: "Bachelor of Science in Computer Science (Software Engineering)",
    institution: "The University of Zambia (UNZA)",
    location: "Lusaka, Zambia",
    start: "2022",
    end: "2025 (ceremony in 2026)",
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
  // Scroll-reveal: adds "is-visible" to each card once it enters the viewport
  useEffect(() => {
    const cards = document.querySelectorAll(".education-card.reveal");

    // Fallback for browsers without IntersectionObserver: just show everything
    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-visible"));
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

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [education]);

  return (
    <section id="education" aria-labelledby="education-heading" className="education-section">
      <h2 id="education-heading" className="education-heading">Education</h2>

      <div className="education-timeline">
        {education.map((edu, idx) => {
          const isCurrent = /present/i.test(edu.end || "");
          // Show a single year when the start and end are the same (e.g. "2017")
          const showEnd = edu.end && edu.end !== edu.start;

          return (
            <article
              key={idx}
              className={`education-card reveal${isCurrent ? " is-current" : ""}`}
            >
              <header className="education-card-header">
                <div className="education-title-block">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  {edu.location && <p className="education-location">{edu.location}</p>}
                </div>

                <div className="education-meta">
                  {isCurrent && <span className="education-badge">Current</span>}
                  <time className="education-dates">
                    {edu.start}
                    {showEnd ? ` — ${edu.end}` : ""}
                  </time>
                </div>
              </header>

              {edu.gpa && (
                <p className="education-gpa">
                  <strong>GPA:</strong> {edu.gpa}
                </p>
              )}

              {edu.highlights?.length > 0 && (
                <ul className="education-list">
                  {edu.highlights.map((hl, i) => (
                    <li key={i} className="education-list-item">{hl}</li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}