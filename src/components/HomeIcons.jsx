import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarPadre } from "../assets/styleds/HomeIcons";
import img1 from "../assets/img/pro1.png";
import img2 from "../assets/img/pro.png";
import img3 from "../assets/img/pro2.png";
import img4 from "../assets/img/pro3.png";
import img5 from "../assets/img/pro4.jpeg";
import img6 from "../assets/img/porple.png";
import img7 from "../assets/img/pro7.png";
import img8 from "../assets/img/pro8.jpeg";
import img9 from "../assets/img/pro5.png";
const HomeIcons = () => {
  return (
    <div className="container">
      <NavbarPadre>
        <nav>
          <ul>
            {navbars.map((navbar) => (
              <li key={navbar.to}>
                <img src={navbar.img} alt="" />
                <NavLink to={navbar.to}>{navbar.text}</NavLink>
                {navbar.conts}
                {!navbar.conts ? null : <p>Nuevo</p>}
              </li>
            ))}
          </ul>
        </nav>
      </NavbarPadre>
    </div>
  );
};

export { HomeIcons };
const navbars = [];
navbars.push({
  img: img1,
  to: "/airMac",
  text: "MacBook Air",
  conts: true,
});
navbars.push({
  img: img2,
  to: "/iphon",
  text: "MacBook Pro",
  conts: true,
});
navbars.push({
  img: img3,
  to: "/watchr",
  text: "iMac de 24”",
});
navbars.push({
  img: img4,
  to: "/airPods",
  text: "Mac mini",
});
navbars.push({
  img: img5,
  to: "/tv",
  text: "Mac Studio",
});
navbars.push({
  img: img6,
  to: "/solo",
  text: "Mac Pro",
});
navbars.push({
  img: img7,
  to: "/soporte",
  text: "Comparar",
});
navbars.push({
  img: img8,
  to: "/done",
  text: "Monitores",
});
navbars.push({
  img: img9,
  to: "/inicio",
  text: "Ventura",
});
