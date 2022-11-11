import React from "react";
import { ComtainerHeader, ImgApple } from "../assets/styleds/Header";
import { ListaHeader } from "./ListaHeader";
import apple from "../assets/img/logo.jpeg";

const Header = () => {
  return (
    <ComtainerHeader>
      {/* <ImgApple>
        <img src={apple} alt="aple" />
      </ImgApple> */}
      <ListaHeader />
    </ComtainerHeader>
  );
};

export default Header;
