import React from "react";
import { ImgBotonMenu } from "../assets/styleds/HeaderButon";
import menu from "../assets/img/menu.png";
const HeaderButon = ({ handleClick }) => {
  return (
    <ImgBotonMenu>
      <img src={menu} alt="" onClick={handleClick} />
    </ImgBotonMenu>
  );
};

export { HeaderButon };
