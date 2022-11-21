import styled from "styled-components";
const color = {
  yellow: "#333",
  whiter: "#fff",
  orange: "#dd674b",
  gris: "#ccc",
  pink: "#8e645c",
  linthg: "#f5f5f7",
};

const ContainerTvCasa = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  justify-items: center;
  background-color: ${color.linthg};
  img {
    width: 100%;
  }
`;

export { ContainerTvCasa };
