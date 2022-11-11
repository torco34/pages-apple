import React from "react";
import { ImgBotonMenu } from "../assets/styleds/BurButon";
import menu from "../assets/img/menu.png";
const BurButon = ({ handleClick }) => {
  return (
    <ImgBotonMenu>
      <img src={menu} alt="" onClick={handleClick} />
    </ImgBotonMenu>
  );
};

export default BurButon;
