import React from "react";
import { GoCloudUpload } from "react-icons/go";
import "./UploadTubnail.css";
import Girl from "../../../../../assests/images/background.png";
const UploadTubnail = ({ fileUpload, fileSelcted }) => {
  return (
    <div className="uploadtubnail">
      <span>
        <GoCloudUpload
          style={{ width: "1em", fontSize: "20px", color: "#b5316a" }}
        />
        <span style={{ padding: "10px" }}>Upload Thumbnail</span>
      </span>
      <input type="text" className=" input-upload" onChange={fileUpload} />
      <p style={{ display: "flex" }}>
        {" "}
        <img
          src={Girl}
          alt="Grill"
          style={{ width: "40%", paddingTop: "10px" }}
        />
        <div
          style={{ paddingLeft: "10px", paddingTop: "10px", fontSize: "13px" }}
        >
          <p className="pic-text">CSI Life.jpg</p>
          <p className="pic-text">1300 * 200 px</p>
          <p className="pic-text">243kb</p>
        </div>
      </p>
    </div>
  );
};

export default UploadTubnail;
