import React from "react";
import "./SideDrawer.css";
import Logo from "../Logo/Logo";
const SideDrawer = () => {
  return (
    <div className="col-md-2 side_drawer fixed-left">
      <Logo />
      <div>
        <a href="#about">Users</a>
        <a href="#services">About CSI</a>
        <a href="#clients">Diocese Info</a>
        <a href="#contact">Dashboard Video</a>
        <a href="#about">Aims & Objectice</a>
        <a href="#services"> Departments</a>
        <a href="#clients">Events</a>
        <a href="#contact">Logout</a>
      </div>
    </div>
  );
};

export default SideDrawer;
