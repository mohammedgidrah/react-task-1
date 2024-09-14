import React from 'react';
import first from './images/desktop-design.jpg'
import second from './images/Landing_Page_1.png'
import therd from './images/weetkit.png'

export default function WebProjects() {
  return (
    <section>
    <div className="names">
      <h2>web projects</h2>
    </div>
    <div className="main-project">
      <div className="project-card">
        <div className="project-image">
          <img alt='project-3' className="img-project1" src={first}/>
        </div>
        <div className="project-info">
          <strong className="project-title">
            <span>project 1</span>
            <a href="https://mohammedgidrah.github.io/first-project/" className="more-details"  rel="noreferrer" target="_blank">More
              details</a>
          </strong>
        </div>
      </div>
      <div className="project-card">
        <div className="project-image">
          <img alt='project-2' className="img-project1"src={second}/>
        </div>
        <div className="project-info">
          <strong className="project-title">
            <span>project 2</span>
            <a href="https://mohammedgidrah.github.io/second-project/" className="more-details"  rel="noreferrer" target="_blank">More
              details</a>
          </strong>
        </div>
      </div>
      <div className="project-card">
        <div className="project-image">
          <img alt='project-3' className="img-project1"src={therd}/>
        </div>
        <div className="project-info">
          <strong className="project-title">
            <span>project 3</span>
            <a href="https://mohammedgidrah.github.io/third-project/" className="more-details"  rel="noreferrer" target="_blank">More
              details</a>
          </strong>
        </div>
      </div>



    </div>
  </section>
  );
}
