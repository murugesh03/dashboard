import React from "react";
import { faPlayCircle, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Video.css";
const Video = () => {
  return (
    <div clasName="video">
      <p>
        <FontAwesomeIcon icon={faPlayCircle} className="video_icon" />
        <span style={{ padding: "5px 0px 0px 5px" }}> Video</span>
      </p>

      <button className="upload">
        Upload Video{" "}
        <FontAwesomeIcon icon={faArrowUp} style={{ float: "right" }} />
      </button>
    </div>
  );
};

export default Video;
