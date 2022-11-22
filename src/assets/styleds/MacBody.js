import styled from "styled-components";

const color = {
  dark: "#333",
  whiter: "#fff",
  orange: "#c2510d",
  gris: "#ccc",
  pink: "#8e645c",
  light: "#ffffff",

  blue: "#0c4196",
};
const Compo1Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  margin-top: 2%;
  align-content: space-between;
  /* border: solid 2px blue; */

  div {
    text-align: center;
    font-family: Arial;
  }
  h2 {
    font-weight: bold;
    /* border: solid 3px pink; */
    font-size: 3rem;
    font-family: Arial;
  }
  img {
    width: 100%;
    height: 40vh;
    padding: 20px;
  }
`;
const TextAir = styled.div`
  margin-top: 10%;
  display: grid;
  font-family: Arial;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));

  height: 20vh;
  h3 {
    font-weight: bold;
  }
  a {
    font-size: 20px;
    text-decoration: none;

    &:hover {
      text-decoration: blue;

      color: ${color.blue};
    }
  }
  p {
    color: ${color.orange};
  }
`;

export { Compo1Container, TextAir };
