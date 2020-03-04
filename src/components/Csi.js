import React from "react";
import ContainerArea from "./ContainerArea/ContainerArea";
import SideDrawer from "./SideDrawer/SideDrawer";
import NavBar from "../components/ContainerArea/MainArea/NavBar/NavBar";
import "./Csi.css";
const Csi = () => {
  return (
    <div className="csi">
  
      
        <SideDrawer />
        <ContainerArea />
 
    </div>
  );
};

export default Csi;
