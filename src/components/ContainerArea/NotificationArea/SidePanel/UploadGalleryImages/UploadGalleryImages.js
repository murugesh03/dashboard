import React from "react";
import { GoCloudUpload } from "react-icons/go";
const UploadGalleryImages = () => {
  return (
    <div>
      <span>
        <GoCloudUpload
          style={{ width: "1em", fontSize: "20px", color: "#b5316a" }}
        />
        <span style={{ padding: "10px" }}>Upload Gallery Images</span>
      </span>
    </div>
  );
};

export default UploadGalleryImages;
