import React, { useState } from "react";
import Video from "./SidePanel/VideoUpload/Video";
import FaceBookurl from "./SidePanel/FaceBookUrl/FaceBookurl";
import YoutubeUrl from "./SidePanel/YoutubeUrl/YoutubeUrl";
import "./NotificationArea.css";
import axios from "axios";
import UploadTubnail from "./SidePanel/UploadTubnail/UploadTubnai";
import UploadGalleryImages from "./SidePanel/UploadGalleryImages/UploadGalleryImages";
const NotificationArea = () => {
  const [upload, setUpload] = useState({
    upload: null
  });

  const fileUploadHandler = () => {
    axios.post("");
  };
  const fileSelectedHandler = event => {
    setUpload({
      upload: event.target.file[0]
    });
  };
  return (
    <div className="col-md-2 notification_area">
      <Video />
      <FaceBookurl />
      <YoutubeUrl />
      <UploadTubnail
        fileSelcted={fileSelectedHandler}
        fileUpload={fileUploadHandler}
      />
      <UploadGalleryImages />
    </div>
  );
};

export default NotificationArea;
