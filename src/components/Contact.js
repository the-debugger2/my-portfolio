import React from 'react';
import {
  FaPhone,
  FaTelegram,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    { id: 1, icon: <FaPhone />, href: 'tel:+260976955697', label: 'Phone' },
    { id: 2, icon: <FaTelegram />, href: 'https://t.me/Brighton_Mubanga', label: 'Telegram' },
    { id: 3, icon: <FaFacebook />, href: 'https://facebook.com/brighton.mubanga.777', label: 'Facebook' },
    { id: 4, icon: <FaInstagram />, href: 'https://instagram.com/brighton.mubanga.777', label: 'Instagram' },
    { id: 5, icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/brighton-mubanga-0001b1262', label: 'LinkedIn' },
    { id: 6, icon: <FaGithub />, href: 'https://github.com/the-debugger2', label: 'GitHub' },
  ];

  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-grid">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">{contact.icon}</span>
            <span className="contact-label">{contact.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
