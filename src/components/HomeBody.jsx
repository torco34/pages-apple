import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/img/home.png";
import { ContainerBody } from "../assets/styleds/HomeBody";
const HomeBody = () => {
  return (
    <ContainerBody>
      <div className="text-center p-5">
        <h5>Nuevo</h5>
        <h1>MacBook Air</h1>
        <p>Tan poderoso que vuela.</p>
        <Link to="/airMac">Más información </Link>
      </div>
      <div className="">
        <img src={home} alt="home" />
      </div>
    </ContainerBody>
  );
};

export { HomeBody };
