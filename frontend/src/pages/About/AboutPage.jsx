import React from 'react';
import './AboutPage.css';
import Footer from '../../components/Footer/Footer.jsx';

function AboutPage() {
  return (
    <>
    <div className="about-page">
      <h1>About</h1>
      <p>
        This e-commerce application was created as a way to practice the frontend and backend skills
        I learned through Codecademy. I designed and built the database myself, added the product information manually,
        and deployed it to integrate it into this project, simulating a real-world scenario.
      </p>
      <p>
        Technologies used in this project include:
      </p>
      <ul>
        <li>React</li>
        <li>Vite</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Jest</li>
        <li>CSS</li>
        <li>Git</li>
        <li>GitHub Pages</li>
      </ul>
    </div>
    <Footer/>
    </>
  );
}

export default AboutPage;