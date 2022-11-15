import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center p-5 text-bg-dark ">
      <p>
        Esta pagina es una copiad de la pagina de Apple en ella practico los
        componectes<br></br>
        <span>Bootstrap styled-componet</span>
        <br></br>
        <Link to="/home">ver</Link>
      </p>
    </div>
  );
};

export default NotFound;
