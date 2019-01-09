import React from 'react';

const TitleSubtitle = ({ title, subtitle }) => (
  <div className='page-header'>
    <h1 className="title">{title}</h1>
      { subtitle && <p className="subtitle">{subtitle}</p>}
  </div>
);

export default TitleSubtitle;
