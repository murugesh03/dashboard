import React from "react";
import Video from "./SidePanel/VideoUpload/Video";
import FaceBookurl from "./SidePanel/FaceBookUrl/FaceBookurl";
import "./NotificationArea.css";
const NotificationArea = () => {
  return (
    <div className="col-md-2 notification_area">
      <Video />
      {/* <FaceBookurl /> */}
    </div>
  );
};

export default NotificationArea;
