import React, { useState } from "react";
import { ComtainerNav, BgDiv } from "../assets/styleds/ListaHeader";
import { NavLink } from "react-router-dom";
import BurButon from "./BurButon";

const ListaHeader = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
    console.log("hola mundo");
  };
  return (
    <>
      <ComtainerNav>
        <ul className={`link ${show ? "active" : ""}`}>
          {navbars.map((navbar) => (
            <li key={navbar.to}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#ffffff" : "#a29898",
                })}
                to={navbar.to}
              >
                {navbar.text}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="burgue">
          <BurButon show={show} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${show ? "active" : ""}`}></BgDiv>
      </ComtainerNav>
    </>
  );
};
export { ListaHeader };
const navbars = [];
navbars.push({
  to: "/home",
  text: "Mac",
});
navbars.push({
  to: "/ipad",
  text: "iPad",
});
navbars.push({
  to: "/iphon",
  text: "Iphone",
});
navbars.push({
  to: "/reloj",
  text: "Watch",
});
navbars.push({
  to: "/audi",
  text: "AirPods",
});
navbars.push({
  to: "/tv",
  text: "TV en casa",
});
navbars.push({
  to: "/solo",
  text: "Solo en Apple",
});
navbars.push({
  to: "/sopo",
  text: "Soporte",
});
navbars.push({
  to: "/donde",
  text: "Donde comprar",
});
