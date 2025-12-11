// src/components/Projects.js
import React, { useState } from "react";
import screen1 from "../Assets/Images/Projects/screen1.jpg";
import screen2 from "../Assets/Images/Projects/screen2.jpg";
import screen3 from "../Assets/Images/Projects/screen3.jpg";
import screen4 from "../Assets/Images/Projects/screen4.jpg";
import screen5 from "../Assets/Images/Projects/screen5.jpg";
import screen6 from "../Assets/Images/Projects/screen6.jpg";
import screen7 from "../Assets/Images/Projects/screen7.png";
import screen8 from "../Assets/Images/Projects/screen8.png";
import screen9 from "../Assets/Images/Projects/screen9.png";
import screen10 from "../Assets/Images/Projects/screen10.png";
import screen11 from "../Assets/Images/Projects/screen11.png";
import screen12 from "../Assets/Images/Projects/screen12.png";
import screen13 from "../Assets/Images/Projects/screen13.png";
import screen14 from "../Assets/Images/Projects/screen14.png";
import screen15 from "../Assets/Images/Projects/screen15.png";
import screen16 from "../Assets/Images/Projects/screen16.png";
import screen17 from "../Assets/Images/Projects/screen17.png";
import screen18 from "../Assets/Images/Projects/screen18.png";
const finance_link = "https://the-debugger2.github.io/Student-Finance-System/login/Login.html";
const wababa_link = "https://github.com/Kasweka1/";
const tic_tac_toe_link = " https://the-debugger2.github.io/tic-tac-toe/"
const colab_link = "https://colab.research.google.com/drive/1afBU4PPGjj63e4NiQNYoPUFgfEoc6OIx?usp=drive_link"
const portfolio_link = "https://the-debugger2.github.io/lupupas-Portfolio/"

// Helper function to convert WababaDev text to clickable link
function parseDescription(text) {
  const parts = text.split(/(WababaDev)/);
  return parts.map((part, idx) => 
    part === "WababaDev" ? 
      <a key={idx} href={wababa_link} target="_blank" rel="noopener noreferrer" className="inline-link">
        {part}
      </a> 
      : part
  );
}
const projects = [
  {
    id: "p-tictactoe",
    title: "Tic Tac Toe (AI agent)",
    description:
      "Created a tic tac toe game that started as human vs human, then extended with an AI agent. Built the board with HTML/CSS, rules and AI algorithm in JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [],
    link: tic_tac_toe_link,
  },
  {
    id: "p-hospital",
    title: "Hospital Management System",
    description:
      "Front end in HTML/CSS, backend in PHP with a MySQL database. Handles adding/viewing/deleting patients, viewing wards and adjusting number of beds.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    images: [],
    link: null,
  },
  {
    id: "p-finance",
    title: "Finance Management System (Group Project)",
    description:
      "Front end in HTML/CSS, backend in TypeScript and data persisted in the browser's localStorage. Records income, expenditure and personal info; generates charts for insights.",
    technologies: ["HTML", "CSS", "TypeScript", "localStorage"],
    images: [],
    link: finance_link,
  },
  {
    id: "p-boarding",
    title: "Boarding House Management System",
    description:
      "Frontend in HTML/CSS/JavaScript and backend implemented in PHP with a MySQL database to manage tenants and rooms.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    images: [screen7,screen8,screen9,screen10,screen11,screen12,screen13,screen14,screen15,screen16,screen17,screen18],
    link: null,
  },
  {
    id: "p-maze",
    title: "Maze Game",
    description: "A Unity project implementing maze gameplay using C# scripts for game logic and player movement.",
    technologies: ["Unity", "C#"],
    images: [],
    link: null,
  },
  {
    id: "p-humanoid",
    title: "Humanoid Model (Unity)",
    description:
      "Created a human-like model in Unity with basic movement controls and animations. This introduced character animation workflows.",
    technologies: ["Unity", "C#", "Animation"],
    images: [screen5, screen6],
    link: null,
  },
  {
    id: "p-fitness",
    title: "Fitness Tracker App (Flutter)",
    description:
      "Built in Flutter with an embedded SQLite DB storing tracked values with my co-collaborator WababaDev. **Note**: portions of the app were partially implemented.",
    technologies: ["Flutter", "Dart", "SQLite"],
    images: [screen1, screen2, screen3, screen4],
    link: null,
  },
  {
    id: "p-modeltrain",
    title: "Model Training (Group Project)",
    description:
      "Trained a classification model to predict judgement classifications from case summaries. Followed CRISP-DM methodology; used Python, pandas and Google Colab.",
    technologies: ["Python", "pandas", "Colab", "Machine Learning"],
    images: [],
    link: colab_link,
  },
  {
    id: "p-Portfolio",
    title: "Portfolio",
    description:
      "Created an artist portfolio for a client to showcase her work and Vision",
    technologies: ["React", "Css", "json", "Javascript"],
    images: [],
    link: portfolio_link,
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  function openProject(project) {
    setSelected(project);
    setSlideIndex(0);
    document.body.style.overflow = "hidden"; // prevent background scroll while modal open
  }

  function closeModal() {
    setSelected(null);
    document.body.style.overflow = "";
  }

  function nextSlide() {
    if (!selected) return;
    const len = selected.images.length;
    setSlideIndex((s) => (len === 0 ? 0 : (s + 1) % len));
  }

  function prevSlide() {
    if (!selected) return;
    const len = selected.images.length;
    setSlideIndex((s) => (len === 0 ? 0 : (s - 1 + len) % len));
  }

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-meta">
              <div className="tech-list">{project.technologies.join(" • ")}</div>
            </div>
            <button className="view-btn" onClick={() => openProject(project)}>
              View Project
            </button>
          </article>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal-header">
              <h3>{selected.title}</h3>
              <button className="modal-close" onClick={closeModal} aria-label="Close">
                ×
              </button>
            </header>
            <div className="modal-body">
              <p className="modal-description">{parseDescription(selected.description)}</p>

              {selected.link ? (
                <div className="modal-link">
                  <a href={selected.link} target="_blank" rel="noopener noreferrer">
                    Open Deployed Project
                  </a>
                </div>
              ) : selected.images?.length > 0 ? (
                <div className="slideshow">
                  <button className="slide-nav prev" onClick={prevSlide} aria-label="Previous">
                    ‹
                  </button>
                  <div className="slide-wrap">
                    <img src={selected.images[slideIndex]} alt={`${selected.title} screenshot ${slideIndex + 1}`} />
                  </div>
                  <button className="slide-nav next" onClick={nextSlide} aria-label="Next">
                    ›
                  </button>
                </div>
              ) : (
                <div className="no-deploy">
                  <p>Sorry — application wasn't deployed.</p>
                </div>
              )}

              {selected.images?.length > 0 && (
                <p className="deployed-note">Sorry — application wasn't deployed.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}