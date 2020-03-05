import React from "react";
import { FaFacebook } from "react-icons/fa";
import "./FaceBookUrl.css";

const FaceBookurl = () => {
  return (
    <div className="facebook">
      <div>
        <span>
          <FaFacebook className="icon_fb" />
          <span style={{ padding: "10px", fontSize: "15px" }}>
            FaceBook URL
          </span>
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

export default FaceBookurl;
