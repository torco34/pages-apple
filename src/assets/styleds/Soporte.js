import styled from "styled-components";
const color = {
  yellow: "#333",
  whiter: "#fff",
  orange: "#dd674b",
  gris: "#ccc",
  pink: "#8e645c",
};
const ContainerSoport = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  justify-items: center;
  text-align: center;
  width: 100%;
  background-color: ${color.linthg};
  img {
    width: 100%;
  }
  h3 {
    position: absolute;
    margin-top: 10rem;
    font-weight: bold;
    color: ${color.whiter};
    font-size: 3rem;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export { ContainerSoport };
