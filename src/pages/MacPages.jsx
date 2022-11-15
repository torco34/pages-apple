import React from "react";
import { ContainerMac } from "../assets/styleds/MacPages";
import { HomeBody } from "../components/HomeBody";
import { HomeIcons } from "../components/HomeIcons";

const MacPages = () => {
  return (
    <div className="container">
      <ContainerMac>
        <div className="homeIconoDiv">
          <HomeIcons />
          {/* <div className="boton">
            <button className="btn ">nex</button>
          </div> */}
        </div>
        <div className="">
          <HomeBody />
        </div>
      </ContainerMac>
    </div>
  );
};

export { MacPages };
