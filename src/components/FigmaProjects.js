import React from 'react';
import first from './images/youtup.png';
import second from './images/facebook.png';
import therd from './images/netflex.png';

export default function FigmaProjects() {
  return (
    <section>
    <div className="names" id="projects">
      <h2>figma projects</h2>
    </div>
    <div className="main-project">
      <div className="project-card">
        <div className="project-image">
          <img alt='' className="img-project1" src={first} />
        </div>
        <div className="project-info">
          <strong className="project-title">
            <span>youtube music design</span>
            <a href="https://www.figma.com/design/RE4VmZVXzWszv131X2ZvFt/Untitled?node-id=0-1&t=oQdHMlUTbMtF"
              className="more-details" target="_blank"  rel="noreferrer">More details</a>
          </strong>
        </div>
      </div>
      <div className="project-card">
        <div className="project-image">
          <img alt='' className="img-project1" src={second}/>
        </div>
        <div className="project-info">
          <strong className="project-title">
            <span>facebook design</span>
            <a href="https://www.figma.com/design/RE4VmZVXzWszv131X2ZvFt/Untitled?node-id=5-2&t=oQdHMlUTbMtF2amg-0"
              className="more-details" target="_blank"  rel="noreferrer">More details</a>
          </strong>
        </div>
      </div>

      {/* </strong> */}
      <div className="project-card">
        <div className="project-image">
          <img alt='' className="img-project1" src={therd}/>
        </div>
        <div className="project-info">
          <strong className="project-title">
            <span>netflex design</span>
            <a href="https://www.figma.com/design/RE4VmZVXzWszv131X2ZvFt/Untitled?node-id=2-33&t=oQdHMlUTbMtF2amg-0"
              className="more-details" target="_blank"  rel="noreferrer">More details</a>
          </strong>
        </div>
      </div>
    </div>
  </section>
  );
}
