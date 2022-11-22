import React from "react";
import imgs22 from "../assets/img/s22.jpeg";
import guz from "../assets/img/guzs.jpg";
import { Compo1Container, TextAir } from "../assets/styleds/MacBody";
import { Link } from "react-router-dom";
export const MacBody = () => {
  return (
    <>
      <Compo1Container>
        <div>
          <img src={imgs22} alt="s22" />

          <TextAir>
            <h3>Chip M1</h3>
            <h2>MacBook Air</h2>
            <Link to="/">Más información</Link>
          </TextAir>
        </div>
        <div>
          <img src={guz} alt="s22" />
          <TextAir>
            <p>Nuevo</p>
            <h3>Chip M2</h3>
            <h2>MacBook Air</h2>
            <Link to="/">Más información</Link>
          </TextAir>
        </div>
      </Compo1Container>
    </>
  );
};
