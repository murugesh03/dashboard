import React from "react";
import { FaYoutube } from "react-icons/fa";
import "./YoutubeUrl.css";

const YoutubeUrl = () => {
  return (
    <div className="youtube">
      <div>
        <span>
          <FaYoutube className="icon_yt" />
          <span style={{ padding: "10px" }}>Youtube URL</span>
        </span>
      </div>
      <div className="input-size">
        <input
          type="email"
          className="form-control "
          placeholder="Enter URL Here"
        />
      </div>
    </div>
  );
};

export default YoutubeUrl;
