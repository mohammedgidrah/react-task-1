import React from 'react';
import instagram from './images/Screenshot_2024-05-17_174926-removebg-preview.png';
import facebook from './images/images-removebg-preview.png';
 import gmail from './images/images__1_-removebg-preview.png';
 import gethub from './images/download-removebg-preview (1).png';
 import linkedin from './images/images__2_-removebg-preview.png';
export default function ContactMe() {
  return (
    <section>
      <div className="main-contact">
        <div>
          <h2 id="Contact Me">Let's Work Together</h2>
          <footer>
            <a className="ig" href="https://www.instagram.com/mohammed_qidrah/" target="_blank"  rel="noopener noreferrer">
              <img  style={{ width: '4rem' }} className="instagram" src={instagram} alt="Instagram" title="Instagram" />
            </a>
            <a className="fb" href="https://www.facebook.com/mohammed.gidrah/?locale=ar_AR" target="_blank" rel="noopener noreferrer">
              <img  style={{ width: '7rem' }} className="facebook"  src={facebook} alt="Facebook" title="Facebook" />
            </a>
            <a className="gm" href="mailto:m7mdgidrah@gmail.com" target="_blank" rel="noopener noreferrer">
              <img  style={{ width: '5rem' }} className="gmail" src={gmail} alt="Gmail" title="Gmail" />
            </a>
            <a className="gh" href="https://github.com/mohammedgidrah" target="_blank" rel="noopener noreferrer">
              <img  style={{ width: '5rem' }} className="github" src={gethub} alt="GitHub" title="GitHub" />
            </a>
            <a className="li" href="https://www.linkedin.com/in/mohammed-alqidrah-452611307/" target="_blank" rel="noopener noreferrer">
              <img style={{ width: '4rem' }} className="linkedin"src={linkedin} alt="LinkedIn" title="LinkedIn" />
            </a>
          </footer>
        </div>
      </div>
    </section>
  );
}
