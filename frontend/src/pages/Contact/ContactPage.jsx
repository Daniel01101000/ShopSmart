import React from 'react';
import './ContactPage.css';
import Footer from '../../components/Footer/Footer.jsx';

function ContactPage() {
  return (
    <>
      <div className="contact-page">
        <h1>Contact</h1>
        <p>This project is part of my personal portfolio. If you’re interested in working together or have any questions, feel free to reach out via email:</p>
        <ul>
          <li>Email: danielcharles2k@gmail.com</li>
          <li>Phone: +52 871 463 9713</li>
          <li>Location: México</li>
        </ul>
        <p>You can also visit my GitHub in the footer</p>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;