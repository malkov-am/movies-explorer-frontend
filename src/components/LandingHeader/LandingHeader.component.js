import React from "react";
import "./LandingHeader.styles.scss";

const LandingHeader = ({ children }) => {
  return (
    <>
      <div className='landing-header'>
        <h2 className='landing-header__title'>{children}</h2>
      </div>
    </>
  );
};

export default LandingHeader;
