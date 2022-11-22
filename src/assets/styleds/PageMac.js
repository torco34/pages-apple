import styled from "styled-components";

// const color = {
//   dark: "#333",
//   whiter: "#fff",
//   orange: "#dd674b",
//   gris: "#ccc",
//   pink: "#8e645c",
//   light: "#ffffff",
// };
const PageMacBody = styled.div`
  display: grid;
  height: 28vh;
  width: 100%;
  /* border: solid 2px red; */
  /* grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr)); */
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: solid 2px red; */
    font-size: 6rem;
    font-weight: bold;
    padding: 30px;
    font-family: Arial;
  }
`;
const ParrafoMacAir = styled.div`
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: solid 2px red; */
    font-size: 4rem;
    font-weight: bold;
    padding: 30px;
    font-family: Arial;
  }
`;

export { PageMacBody, ParrafoMacAir };
