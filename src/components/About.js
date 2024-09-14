import React from 'react';
import facbebook from './images/WhatsApp_Image_2024-05-16_at_23.42.34_26b92ddb-removebg-preview.png';
import orange from './images/download.png';
import universty from './images/WhatsApp_Image_2024-05-16_at_23.42.33_3b5cc89e-removebg-preview.png';

export default function About() {
  return (
    <section>
      <div className="second">
        <h2 id="about-me">About Me</h2>
        <p className="About">
          Strong at building relationships with team members and customers.<br />
          Quick learner, good at teamwork, and adept at tracking errors in languages like C++ and Python.<br />
          Passionate about my major as a software engineer.<br />
        </p>
        <div className="maincard">
          <div className="card" style={{ width: '18rem' }}>
            <img src={facbebook} className="card-img-top" alt="Khalil Al-Rahman Academy" />
            <div className="card-body">
              <p className="card-text">I studied at Khalil Al-Rahman Academy</p>
              <a href="https://www.facebook.com/Khalil.Al.Rahman.Academy.Aqaba/?locale=ar_AR" target="_blank"  rel="noopener noreferrer" className="btn btn-primary">Visit Site</a>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img src={orange} className="card-img-top" alt="Orange Coding Academy" />
            <div className="card-body">
              <p className="card-text">Trainee at Orange Coding Academy in Aqaba</p>
              <a href="https://yo.orange.jo/orange-coding-academy" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Site</a>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img src={universty} className="card-img-top" alt="Aqaba University of Technology" />
            <div className="card-body">
              <p className="card-text">Studying at Aqaba University of Technology</p>
              <a href="http://edugate.aut.edu.jo/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Site</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
