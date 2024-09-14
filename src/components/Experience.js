import React from 'react';
import alshab from './images/alsheap-removebg-preview.png';
import Html from './images/Screenshot_2024-05-17_000909-removebg-preview.png';
import Css from './images/Screenshot_2024-05-17_000929-removebg-preview.png';
export default function Experience() {
  return (
    <section>
    <div className="color-card">
      <h2 id="Experience">Experience</h2>

      <div className="maincard">
        <div className="card" style={{ width: '18rem' }}>
          <img alt='' src={alshab} className="card-img-top1"/>
          <div className="card-body">
            <p className="card-text1">Worked For About A Year And Half in Al Shaeb Roastery</p>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img alt='' src={Html} className="card-img-top2"/>
          <div className="card-body">
            <p className="card-text">Take Cours in HTML Programming Language</p>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img alt='' src={Css} className="card-img-top"/>
          <div className="card-body">
            <p className="card-text">Take Cours in CSS Programming Language</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
