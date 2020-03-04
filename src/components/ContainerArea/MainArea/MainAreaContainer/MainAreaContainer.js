import React from "react";
import "./MainAreaContainer.css";
import GirlPic from "../../../../assests/images/background.png";
const MainAreaContainer = () => {
  return (
    <div className="main_area_container">
      <div className="content_area">
        <p>Title</p>
        <p>Christian Education Department - 2019 - 20</p>
        <div>
          <p>Description</p>
          <p>
            Church of South India (CSI) is a Missionary Church with a lot of
            evangelistic zeal.Towards the sustainable transformation is the
            focus and passion of the Church. The Church reconciliation in the
            living context of the people of God.{" "}
          </p>
          <img src={GirlPic} alt="GirlPicture"/>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default MainAreaContainer;
