import React, { useState } from "react";
import { ComtainerNav, BgDiv } from "../assets/styleds/Header";
import { NavLink } from "react-router-dom";
import { HeaderButon } from "./HeaderButon";

const Header = () => {
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
                  color: isActive ? "#ffffff" : "#c0c0ca",
                })}
                to={navbar.to}
              >
                {navbar.text}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="burgue">
          <HeaderButon show={show} handleClick={handleClick} />
        </div>
        <BgDiv
          className={`initial ${show ? "active" : ""}`}
          onClick={handleClick}
        ></BgDiv>
      </ComtainerNav>
    </>
  );
};
export { Header };
const navbars = [];
navbars.push({
  to: "/home",
  text: "Mac",
});
navbars.push({
  to: "/ipad",
  text: "iPad",
  cont: true,
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
