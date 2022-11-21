import React from "react";
import icons from "../assets/img/iconipone.png";
import texto from "../assets/img/letre.png";
import pro14 from "../assets/img/3peges.png";
import { ContainerIphone } from "../assets/styleds/Iphone";
import { Link } from "react-router-dom";

export const Iphone = () => {
  return (
    <>
      <ContainerIphone>
        <div>
          <img src={icons} alt="" />
        </div>
        <div>
          <img src={texto} alt="" />
          <Link to="/home">Más información</Link>
        </div>

        <div>
          <img src={pro14} alt="" />
        </div>
      </ContainerIphone>
    </>
  );
};
