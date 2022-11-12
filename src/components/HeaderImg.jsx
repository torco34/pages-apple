import React from "react";
import { ComtainerHeader, ImgApple } from "../assets/styleds/Header";
import { ListaHeader } from "./ListaHeader";
import apple from "../assets/img/logo.jpeg";

const Header = () => {
  return (
    <ComtainerHeader>
      <img src={apple} alt="aple" />
    </ComtainerHeader>
  );
};

export default Header;
