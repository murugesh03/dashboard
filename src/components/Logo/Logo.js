import React from "react";
import LogoIcon from "../../assests/images/newogo.png";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="Logo">
      <div className="logo-icon">
        <img src={LogoIcon} alt="logo icon" />
      </div>
      <p className="logo_text">CSI - SYNOD</p>
    </div>
  );
};

export default Logo;
