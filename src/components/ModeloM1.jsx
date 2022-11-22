import React from "react";

import {
  ContainerChiMi,
  ContainerTexto,
  Enlaces,
  Texto,
} from "../assets/styleds/ModeloM1";
import imgNegra from "../assets/img/negra.jpeg";
export const ModeloM1 = () => {
  return (
    <>
      <ContainerChiMi>
        <div className="container">
          <ContainerTexto>
            <Texto>
              <p>
                Modelo con chip M1<br></br> <span>MacBook Air</span>
              </p>
            </Texto>
            <Enlaces>
              <a href="">Descripción</a>
              <a href="">Por qué el Mac</a>
              <a href="">Especificaciones</a>
              <button className="btn btn-primary">Comprar</button>
            </Enlaces>
          </ContainerTexto>
        </div>
        <div>
          <img src={imgNegra} alt="" />
        </div>
      </ContainerChiMi>
    </>
  );
};
