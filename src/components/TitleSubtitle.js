import React from 'react';

const TitleSubtitle = ({ title, subtitle }) => (
  <div>
    <h1 className="title">{title}</h1>
      { subtitle && <p className="subtitle">{subtitle}</p>}
  </div>
);

export default TitleSubtitle;
