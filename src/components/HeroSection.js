import React from 'react';
import myImage from './images/WhatsApp_Image_2024-05-07_at_02.58.55_5aab24a8-removebg-preview.png';
export default function HeroSection() {
  return (
    <section>
    <div className="first">
      <img alt='mohammed-img' className="me" src={myImage}/>
      <h1>welcome to my website<br />
        <span> <b>I Am Mohammad<br />
            Web Developer<br />
            This Page is A Description About
            Me And How To Contact Me if You Want To Benefit From My Experience</b></span>
        <a href="#projects" className="main-btn">view my work </a>
      </h1>


    </div>
  </section>
  );
}
