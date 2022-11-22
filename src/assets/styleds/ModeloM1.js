import styled from "styled-components";

const color = {
  dark: "#333",
  whiter: "#fff",
  orange: "#f56300",
  gris: "#ccc",
  pink: "#8e645c",
  light: "#ffffff",
  blak: "#151516",
  blue: "#1774d1;",
};
const ContainerChiMi = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  height: 100vh;
  color: ${color.light};
  background-color: ${color.blak};
  font-family: Arial;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
const ContainerTexto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 20px;
`;
const Enlaces = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid 2px red; */

  a {
    margin: 20px;
    color: ${color.light};
    list-style: none;
    text-decoration: none;
    &:hover {
      color: ${color.blue};
    }
  }
`;
// texto de lo a o enlces
const Texto = styled.div`
  margin-top: 10px;
  line-height: 1;
  color: ${color.gris};
  /* height: 100px; */
  span {
    font-size: 2rem;
    color: ${color.whiter};
  }
`;

export { ContainerChiMi, ContainerTexto, Enlaces, Texto };
