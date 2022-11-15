import React from "react";
import { Ipads, ParrafoH5 } from "../assets/styleds/Ipad";
import icons from "../assets/img/iconIpad.png";
import imgipad from "../assets/img/ipad.png";
export const Ipad = () => {
  return (
    <Ipads>
      <div className="text-center">
        <div className="imageIcono">
          <img src={icons} alt="" />
        </div>

        <ParrafoH5>
          <h5>
            Apple temporalmente no puede ofrecer dispositivos con tecnología 5G
            en Colombia debido a una orden de un tribunal colombiano, decisión
            que Apple está apelando.
          </h5>
        </ParrafoH5>
        <h2>
          Diles hola a los nuevos <br />
          iPad y iPad Pro.
        </h2>
        <br></br>
        <button className="btn btn-light">ver video</button>
      </div>
      <div className="imagen">
        <img src={imgipad} alt="" />
      </div>
    </Ipads>
  );
};
