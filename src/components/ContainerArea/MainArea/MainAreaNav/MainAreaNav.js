import React from "react";
import "./MainAreaNav.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCheckCircle, FaArrowCircleUp } from "react-icons/fa";
  // import {
  //   faCheckCircle,
  //   faArrowCircleUp
// } from "@fortawesome/free-solid-svg-icons";

const MainAreaNav = () => {
  return (
    <div className="MainAreaNav">
      <p className="MainAreaNav_text">CSI News</p>
      <div className="dropdown drop_down_width dropdown-button">
        <button
          type="button"
          style={{ borderBottom: "1px solid #b5316a", borderRadius: "0" }}
          className="btn  dropdown-toggle"
          data-toggle="dropdown"
        >
          Select the department here
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">
            Link 1
          </a>
          <a className="dropdown-item" href="#">
            Link 2
          </a>
          <a className="dropdown-item" href="#">
            Link 3
          </a>
        </div>
      </div>
      <div className="dropdown drop_down_width dropdown-button">
        <button
          type="button"
          style={{ borderBottom: "1px solid #b5316a", borderRadius: "0" }}
          className="btn  dropdown-toggle"
          data-toggle="dropdown"
        >
          Date
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">
            Link 1
          </a>
          <a className="dropdown-item" href="#">
            Link 2
          </a>
          <a className="dropdown-item" href="#">
            Link 3
          </a>
        </div>
      </div>
      <button className="button_save">
        <FaCheckCircle className="icons" />
        <span
          style={{
            lineHeight: "33px",
            color: "#b5316a"
          }}
        >
          {" "}
          Save
        </span>
      </button>
      <button className="button_save">
        <FaArrowCircleUp className="icons"  />
        <span
          style={{
            lineHeight: "33px",
            color: "#b5316a",
            height: "5vh",
            width: "50%"
          }}
        >
          {" "}
          Publish
        </span>
      </button>
    </div>
  );
};

export default MainAreaNav;
