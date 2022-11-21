import React from "react";
import reloj from "../assets/img/reloj.png";
import iconos from "../assets/img/reloicon.png";

import { ContainerWatchr, ImgTexto, ImaReloj } from "../assets/styleds/Watchr";
import { Link } from "react-router-dom";
export const WatchPage = () => {
  return (
    <ContainerWatchr>
      <img src={iconos} alt="" />
      <ImgTexto>
        <h3>WATCHE</h3>
        <p>ultra</p>
        <h1>A la aventura</h1>
        <Link to="/">Más información</Link>
      </ImgTexto>

      <ImaReloj>
        <img src={reloj} alt="" />
      </ImaReloj>
    </ContainerWatchr>
  );
};
