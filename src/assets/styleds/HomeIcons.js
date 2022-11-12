import styled from "styled-components";
const color = {
  dark: "#333",
  white: "#fff",
  orange: "#f56300",
  gray: "#ccc",
  silver: "#f5f5f7",
  black: "#000",
};
const NavbarPadre = styled.div`
  margin-top: 30px;
  /* width: 60%; */

  display: flex;
  justify-content: center;
  align-items: center;
  nav {
    width: 70%;
  }
  p {
    color: ${color.orange};
    font-size: 10px;
  }

  ul {
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  li {
    display: grid;
    justify-items: center;
    list-style-type: none;
  }
  a {
    text-align: center;
    color: ${color.dark};
    text-decoration: none;
    list-style: none;
    font-size: 10px;
    &:hover {
      color: ${color.blue};
    }
  }
  img {
    width: 100%;
    height: 75%;
  }
`;

export { NavbarPadre };
