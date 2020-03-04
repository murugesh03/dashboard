import React from "react";
// import { FaFacebook } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
const FaceBookurl = () => {
  return (
    <div clasName="facebook">
      <p style={{ display: "flex" }}>
        <span>
          {/* <FontAwesomeIcon icon={faFacebookF} /> */}
        </span>
        <span>FaceBook URL</span>
      </p>

      <input type="email" class="form-control" placeholder="Enter URL Here" />
    </div>
  );
};

export default FaceBookurl;
