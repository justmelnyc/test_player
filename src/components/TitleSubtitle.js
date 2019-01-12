import React from 'react';

const TitleSubtitle = ({ title, subtitle }) => (
  <div className='page-header desktop'>
    <h1 className="title desktop">{title}</h1>
      { subtitle && <p className="subtitle">{subtitle}</p>}
  </div>
);

export default TitleSubtitle;
