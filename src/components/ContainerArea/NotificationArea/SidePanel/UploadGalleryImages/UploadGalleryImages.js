import React, { useCallback } from "react";
import { GoCloudUpload } from "react-icons/go";
// import Dropzone from "react-dropzone";
import { useDropzone } from "react-dropzone";
import "./UploadGalleryImages.css";

const UploadGalleryImages = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
      <span>
        <GoCloudUpload
          style={{ width: "1em", fontSize: "20px", color: "#b5316a" }}
        />
        <span style={{ padding: "10px", fontSize: "15px" }}>
          Upload Gallery Images
        </span>
      </span>
      <div className="drag-and-drop" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p style={{ padding: "15px 5px", margin: "0" }}>
            Drag and Drop or Browse
          </p>
        )}
      </div>
    </div>
  );
};

export default UploadGalleryImages;
