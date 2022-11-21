import React from "react";
import teve from "../assets/img/tvmat.png";
import icons from "../assets/img/tvicon.png";
import tvcas from "../assets/img/tvCasa.png";
import { ContainerTvCasa } from "../assets/styleds/TvCasa";
export const TvCasaPage = () => {
  return (
    <ContainerTvCasa>
      <div className="">
        <img src={icons} alt="" />
      </div>
      <div className=""></div>
      <img src={teve} alt="" />
      <div className="">
        <img src={tvcas} alt="" />
      </div>
    </ContainerTvCasa>
  );
};
