import React from "react";
import NotificationArea from "../ContainerArea/NotificationArea/NotificationArea";
import MainArea from "./MainArea/MainArea";

const ContainerArea = () => {
  return (
    <React.Fragment>
      <MainArea />
      <NotificationArea />
    </React.Fragment>
  );
};

export default ContainerArea;
