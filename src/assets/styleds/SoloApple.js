import styled from "styled-components";
const color = {
  yellow: "#333",
  whiter: "#fff",
  orange: "#dd674b",
  gris: "#ccc",
  pink: "#8e645c",
};
const ContainerSoloApp = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  justify-items: center;
  text-align: center;
  font-weight: bold;
  background-color: ${color.linthg};

  h2 {
    font-size: 3rem;
    font-weight: bold;
    font-family: Arial;
  }
  div {
    width: 60%;
    /* border: solid 1px red; */
    margin-top: 2%;
  }
  h3 {
    font-size: 2rem;

    font-family: Arial;
  }
`;

export { ContainerSoloApp };
