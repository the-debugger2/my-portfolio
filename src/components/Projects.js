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
import screen19 from "../Assets/Images/Projects/screen19.jpeg";
import screen20 from "../Assets/Images/Projects/screen20.jpeg";
import screen21 from "../Assets/Images/Projects/screen21.jpeg";
import screen22 from "../Assets/Images/Projects/screen22.jpeg";
import maze1 from "../Assets/Images/Projects/maze1.jpeg";
import maze2 from "../Assets/Images/Projects/maze2.jpeg";
import maze3 from "../Assets/Images/Projects/maze3.jpeg";
import maze4 from "../Assets/Images/Projects/maze4.jpeg";
import humanoid1 from "../Assets/Images/Projects/humanoid1.jpeg";
import noImage from "../Assets/Images/no_image.webp";
import finance from "../Assets/Images/finance.png";
import judgement from "../Assets/Images/Judgement.png";
import portfolio from "../Assets/Images/portfolio.png";
import ticTacToe from "../Assets/Images/tic-tac-toe.png";
import retail_img from "../Assets/Images/retail.png";

const finance_link = "https://the-debugger2.github.io/Student-Finance-System/login/Login.html";
const wababa_link = "https://github.com/Kasweka1/";
const tic_tac_toe_link = "https://the-debugger2.github.io/tic-tac-toe/";
const colab_link = "https://colab.research.google.com/drive/1afBU4PPGjj63e4NiQNYoPUFgfEoc6OIx?usp=drive_link";
const portfolio_link = "https://the-debugger2.github.io/lupupas-Portfolio/";
const procedure_link= "https://proceduremanagementsystem--1fm48wfb99.expo.app/auth";
const retail_analytics_link ="https://docs.google.com/document/d/1HgaKYG6RPNXlJWBv5l-ads687BdZ1xyF/edit?usp=sharing&ouid=111524750817753332399&rtpof=true&sd=true";

// Turn "WababaDev" into a clickable link
function parseDescription(text) {
  const parts = text.split(/(WababaDev)/);
  return parts.map((part, idx) =>
    part === "WababaDev" ? (
      <a
        key={idx}
        href={wababa_link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-link"
      >
        {part}
      </a>
    ) : (
      part
    )
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
    thumbnail: ticTacToe,
    link: tic_tac_toe_link,
  },
  {
    id: "p-hospital",
    title: "Hospital Management System",
    description:
      "Front end in HTML/CSS, backend in PHP with a MySQL database. Handles adding/viewing/deleting patients, viewing wards and adjusting number of beds.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    images: [],
    thumbnail: noImage,
    link: null,
  },
  {
    id: "p-finance",
    title: "Finance Management System (Group Project)",
    description:
      "Front end in HTML/CSS, backend in TypeScript and data persisted in the browser's localStorage. Records income, expenditure and personal info; generates charts for insights.",
    technologies: ["HTML", "CSS", "TypeScript", "localStorage"],
    images: [],
    thumbnail: finance,
    link: finance_link,
  },
  {
    id: "p-boarding",
    title: "Boarding House Management System",
    description:
      "Frontend in HTML/CSS/JavaScript and backend implemented in PHP with a MySQL database to manage tenants and rooms.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    images: [
      screen7, screen8, screen9, screen10, screen11, screen12,
      screen13, screen14, screen15, screen16, screen17, screen18,
    ],
    thumbnail: screen7,
    link: null,
  },
  {
    id: "p-maze",
    title: "Maze Game",
    description: "A Unity project implementing maze gameplay using C# scripts for game logic and player movement.",
    technologies: ["Unity", "C#"],
    images: [maze1, maze2, maze3, maze4],
    thumbnail: maze4,
    link: null,
  },
  {
    id: "p-humanoid",
    title: "Humanoid Model (Unity)",
    description:
      "Created a human-like model in Unity with basic movement controls and animations. This introduced character animation workflows.",
    technologies: ["Unity", "C#", "Animation"],
    images: [screen5, screen6, humanoid1],
    thumbnail: humanoid1,
    link: null,
  },
  {
    id: "p-fitness",
    title: "Fitness Tracker App (Flutter)",
    description:
      "Built in Flutter with an embedded SQLite DB storing tracked values with my co-collaborator WababaDev. Note: portions of the app were partially implemented.",
    technologies: ["Flutter", "Dart", "SQLite"],
    images: [screen1, screen2, screen3, screen4],
    thumbnail: screen1,
    link: null,
  },
  {
    id: "p-modeltrain",
    title: "Model Training (Group Project)",
    description:
      "Trained a classification model to predict judgement classifications from case summaries. Followed CRISP-DM methodology; used Python, pandas and Google Colab.",
    technologies: ["Python", "pandas", "Colab", "Machine Learning"],
    images: [],
    thumbnail: judgement,
    link: colab_link,
  },
  {
  id: "p-retailDataEngineering",
  title: "Retail Data Pipeline",
  description:
    "An end-to-end data pipeline that automates ingestion from Azure Blob Storage into SQL Server via Azure Data Factory. Cleans and transforms raw retail data using stored procedures, builds analytical views, and delivers interactive Power BI dashboards using advanced DAX measures.",
  technologies: [
    "Azure Data Factory",
    "SQL Server",
    "Power BI",
    "Azure Blob Storage"
  ],
  images: [], 
  thumbnail: retail_img,
  link: retail_analytics_link,
},
  {
    id: "p-procedureManagement",
    title: "Procedure Management System ",
    description:
      "Front end in ReactNative, backend in Node.js and data persisted in postgres(Supabase). Gets company standard practices and creates a central point for all the procedures per department. For now it has admin only functions but future iterations involve employee accounts and features to assign tasks to employees. note: this project a mobile app but also deployed as a website for testing purposes only and resources being utilized are free so to access server you need to wait a minute or so.",
    technologies: ["ReactNative", "Node.js", "PostgreSQL"],
    images: [screen19, screen20, screen21, screen22],
    thumbnail: screen21,
    link: procedure_link,
  },
  {
    id: "p-portfolio",
    title: "Portfolio",
    description: "Created an artist portfolio for a client to showcase her work and vision.",
    technologies: ["React", "CSS", "JSON", "JavaScript"],
    images: [],
    thumbnail: portfolio,
    link: portfolio_link,
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  function openProject(project) {
    setSelected(project);
    setSlideIndex(0);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setSelected(null);
    document.body.style.overflow = "";
  }

  function nextSlide() {
    if (!selected || selected.images.length === 0) return;
    setSlideIndex((s) => (s + 1) % selected.images.length);
  }

  function prevSlide() {
    if (!selected || selected.images.length === 0) return;
    setSlideIndex((s) => (s - 1 + selected.images.length) % selected.images.length);
  }

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card reveal">
            <h3>{project.title}</h3>

            <img
              className="project-thumb"
              src={project.thumbnail}
              alt={project.title + " thumbnail"}
            />

            <p className="project-desc">{project.description}</p>

            <div className="project-meta">
              <div className="tech-list">
                {project.technologies.join(" ▪ ")}
              </div>
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
              <p className="modal-description">
                {parseDescription(selected.description)}
              </p>

              {selected.link ? (
                <div className="modal-link">
                  <a href={selected.link} target="_blank" rel="noopener noreferrer">
                    Open Deployed Project
                  </a>
                </div>
              ) : selected.images.length > 0 ? (
                <>
                  <div className="slideshow">
                    <button className="slide-nav prev" onClick={prevSlide}>‹</button>

                    <div className="slide-wrap">
                      <img
                        src={selected.images[slideIndex]}
                        alt={`${selected.title} screenshot ${slideIndex + 1}`}
                      />
                    </div>

                    <button className="slide-nav next" onClick={nextSlide}>›</button>
                  </div>

                  <p className="deployed-note">Sorry — application wasn’t deployed.</p>
                </>
              ) : (
                <p className="deployed-note">Sorry — application wasn’t deployed.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
