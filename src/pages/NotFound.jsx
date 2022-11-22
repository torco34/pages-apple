import React from "react";
import { Link } from "react-router-dom";
import { ContainerNot } from "../assets/styleds/NotFon";
const NotFound = () => {
  return (
    <ContainerNot>
      <p>
        Es una landing pages de la pagina de Apple. En esta copia, practico los
        componentes
        <br></br>
        <span>React, React router, Bootstrap y styled-components</span>
        <br></br>
        <span className="btn btn-dark  ">
          <Link to="/home">ver</Link>
        </span>
      </p>
    </ContainerNot>
  );
};

export default NotFound;
