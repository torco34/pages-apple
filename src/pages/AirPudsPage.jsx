import React from "react";
import icons from "../assets/img/audiIcon.png";
import imgCuerpo from "../assets/img/audifo.png";
import { ContainerAirPon } from "../assets/styleds/AirPon";
export const AirPudsPage = () => {
  return (
    <ContainerAirPon>
      <div className="">
        <img src={icons} alt="" />
        {/* <h1>ESTAOY AVERIGUANDO QUE PAGINA ES</h1> */}
      </div>
      <div className="">
        <img src={imgCuerpo} alt="" />
      </div>
    </ContainerAirPon>
  );
};
