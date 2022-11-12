import React from "react";
import { ComtainerImg } from "../assets/styleds/HeaderImg";

import apple from "../assets/img/logo.jpeg";

const HeaderImg = () => {
  return (
    <ComtainerImg>
      <img src={apple} alt="aple" className="img" />
    </ComtainerImg>
  );
};

export default HeaderImg;
