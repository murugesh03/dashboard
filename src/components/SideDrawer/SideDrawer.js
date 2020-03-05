import React from "react";
import "./SideDrawer.css";
import Logo from "../Logo/Logo";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { FiFolderMinus, FiYoutube, FiBarChart, FiLogOut } from "react-icons/fi";
import { GiArrowScope } from "react-icons/gi";
import { MdEvent } from "react-icons/md";

const SideDrawer = () => {
  return (
    <div className="col-md-2 side_drawer fixed-left">
      <Logo />
      <hr />
      <div>
        <ul
          style={{
            listStyle: "none",
            lineHeight: " 40px",
            color: "white",
            margin: "15px"
          }}
        >
          <li>
            {" "}
            <AiOutlineUser className="icons-size" />
            <span className="icon-text">Users</span>
          </li>
          <li>
            <AiOutlineHome className="icons-size" />
            <span className="icon-text">About CSI</span>
          </li>
          <li>
            <FiFolderMinus className="icons-size" />
            <span className="icon-text">Diocese Info</span>
          </li>
          <li>
            <FiYoutube className="icons-size" />
            <span className="icon-text">Dashboard Video</span>
          </li>
          <li>
            <GiArrowScope className="icons-size" />
            <span className="icon-text">Aims & Objectice</span>
          </li>
          <li>
            <FiBarChart className="icons-size" />
            <span className="icon-text">Departments</span>
          </li>
          <li>
            <MdEvent className="icons-size" />
            <span className="icon-text">Events</span>
          </li>
          <li>
            {" "}
            <FiLogOut className="icons-size" />
            <span className="icon-text">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
