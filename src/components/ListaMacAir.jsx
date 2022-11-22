import React from "react";
import { ContenedorMacbook } from "../assets/styleds/ListaMacAir";
import img1 from "../assets/img/macB1.png";
import img2 from "../assets/img/macB2.png";
import img3 from "../assets/img/pro7.png";
import img4 from "../assets/img/pro8.jpeg";
import img5 from "../assets/img/pro5.png";
import { NavLink } from "react-router-dom";
const ListaMacAir = () => {
  return (
    <div className="container">
      <ContenedorMacbook>
        <ul>
          {navbars.map((navbar) => (
            <li key={navbar.to}>
              <img src={navbar.img} />
              <NavLink to={navbar.to}>{navbar.text}</NavLink>
              {navbar.conts}
              {!navbar.conts ? null : <p>Nuevo</p>}
            </li>
          ))}
        </ul>
      </ContenedorMacbook>
    </div>
  );
};
export { ListaMacAir };
const navbars = [];
navbars.push({
  img: img1,
  to: "/modelo",
  text: "MacBook Air con chip M1",
  conts: false,
});
navbars.push({
  img: img2,
  to: "/macbookm",
  text: "MacBook Air con chip M2",
  conts: true,
});
navbars.push({
  img: img3,
  to: "/comparar",
  text: "Comparar",
});
navbars.push({
  img: img4,
  to: "/moni",
  text: "Monitores",
});
navbars.push({
  img: img5,
  to: "/macos",
  text: "Ventura",
});
