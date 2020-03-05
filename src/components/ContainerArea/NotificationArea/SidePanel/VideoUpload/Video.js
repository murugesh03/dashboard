import React from "react";
// import { faPlayCircle, faArrowUp } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoMdPlayCircle } from "react-icons/io";
import "./Video.css";
const Video = () => {
  return (
    <div className="video">
      <span>
        <IoMdPlayCircle className="video_icon" />
        <span style={{ padding: "10px", fontSize: "15px" }}> Video</span>
      </span>

      <button className="upload">
        Upload Video{" "}
        <IoIosArrowRoundUp
          style={{
            float: "right",
            width: "1em",
            color: "#b5316a",
            fontSize: "25px"
          }}
        />
      </button>
    </div>
  );
};

export default Video;
