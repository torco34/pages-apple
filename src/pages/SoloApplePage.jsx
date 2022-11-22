import React from "react";
import icons from "../assets/img/iconSolo.png";
import { ContainerSoloApp } from "../assets/styleds/SoloApple";
export const SoloApplePage = () => {
  return (
    <ContainerSoloApp>
      <img src={icons} alt="" />
      <div>
        <h2>Las mejores experiencias. Sólo en Apple.</h2>
      </div>
      <div>
        <h3>
          Descubre todo lo que puedes hacer con tus dispositivos favoritos.
          Películas y programas premiados, la mejor música en audio espacial,
          entrenamientos y meditaciones de primer nivel y juegos muy divertidos.
          Sin duda, es el contenido más innovador, interesante y extraordinario
          que puedas encontrar. Disponible sólo en Apple.
        </h3>
      </div>
    </ContainerSoloApp>
  );
};
