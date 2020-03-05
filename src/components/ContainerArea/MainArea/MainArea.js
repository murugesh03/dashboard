import React from "react";
import MainAreaNav from "./MainAreaNav/MainAreaNav";
import MainAreaContainer from "./MainAreaContainer/MainAreaContainer";
import "./MainArea.css";
const MainArea = () => {
  return (
    <div className="col-md-7 main_area">
      <MainAreaNav />
      <hr />
      <MainAreaContainer />
    </div>
  );
};

export default MainArea;
