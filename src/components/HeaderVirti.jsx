import React from "react";
import { ContainerVert } from "../assets/styleds/HeaderVert";
import { NavLink } from "react-router-dom";

const HeaderVirti = ({ handleClick }) => {
  return (
    <>
      <ContainerVert onClick={handleClick}>
        <ul>
          {navbars.map((navbar) => (
            <li key={navbar.to}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#ffff" : "#c0c0ca",
                })}
                to={navbar.to}
              >
                {navbar.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </ContainerVert>
    </>
  );
};
export { HeaderVirti };
const navbars = [];
navbars.push({
  to: "/home",
  text: "Mac",
  texto: true,
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
