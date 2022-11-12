import styled from "styled-components";
const color = {
  dark: "#333",
  whiter: "#fff",
  orange: "#f56300",
  gris: "#ccc",
  pink: "#8e645c",
};
const ContainerBody = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 50vh;
  padding: 1rem;
  margin-top: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  img {
    width: 100%;
    height: 70vh;
  }

  h5 {
    color: ${color.orange};
    font-weight: bold;
    margin-top: -2rem;
    font-size: 1.5rem;
  }
  h1 {
    font-size: 4.5rem;
    font-weight: bold;
    font-weight: 550;
    line-height: 1;
  }
  p {
    font-size: 2.2rem;
    font-weight: bold;
    line-height: 1;
    font-weight: 600;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
  }
`;

export { ContainerBody };
