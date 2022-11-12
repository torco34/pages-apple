import React, { useState } from "react";
import { ComtainerNav } from "../assets/styleds/Header";
import { NavLink } from "react-router-dom";
import { HeaderButon } from "./HeaderButon";
import HeaderImg from "./HeaderImg";
import { HeaderVirti } from "./HeaderVirti";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
    console.log("hola mundo");
  };
  return (
    <>
      <ComtainerNav>
        <div>
          <HeaderImg />
        </div>
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
          <HeaderButon handleClick={handleClick} />
        </div>

        {show ? <HeaderVirti handleClick={handleClick} /> : ""}
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
