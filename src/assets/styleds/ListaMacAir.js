import styled from "styled-components";
const color = {
  dark: "#333",
  whiter: "#fff",
  orange: "#f56300",
  gris: "#ccc",
  pink: "#8e645c",
  blue: "#1774d1;",
};
const ContenedorMacbook = styled.div`
  margin-top: 30px;
  width: 90%;
  /* border: solid 3px pink; */
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: ${color.orange};
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: solid 3px red; */
    gap: 10px;
  }
  li {
    display: grid;
    justify-items: center;
    list-style-type: none;
    object-fit: cover;
    /* gap: 10px; */
    width: 20%;

    /* border: solid 3px blue; */
  }
  a {
    text-align: center;
    color: ${color.dark};
    text-decoration: none;
    list-style: none;
    margin-top: 20px;
    &:hover {
      color: ${color.blue};
    }
  }
  img {
    width: 40%;
    /* height: 90%; */
    object-fit: cover;
  }
`;

export { ContenedorMacbook };
