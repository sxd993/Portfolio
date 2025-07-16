import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Наша команда</h2>
      <div className="team-members">
        <div className="team-member">
          <div className="team-placeholder-image1"></div>
          <p className="team-name">Евгений</p>
        </div>
        <div className="team-member">
          <div className="team-placeholder-image2"></div>
          <p className="team-name">Владимир</p>
        </div>
        <div className="team-member">
          <div className="team-placeholder-image3"></div>
          <p className="team-name">Артем</p>
        </div>
      </div>
    </section>
  );
};

export default Team;