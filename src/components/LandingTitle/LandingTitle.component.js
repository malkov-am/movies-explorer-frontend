import React from 'react';
import './LandingTitle.styles.scss';

const LandingTitle = ({children}) => {
    return (
        <div className='landing-title'>
          <div className='landing-title__title-container'>
            <h2 className='landing-title__title'>{children}</h2>
          </div>
        </div>
    );
};

export default LandingTitle;
