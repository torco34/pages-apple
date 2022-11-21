import styled from "styled-components";
const color = {
  yellow: "#333",
  whiter: "#fff",
  orange: "#dd674b",
  gris: "#ccc",
  pink: "#8e645c",
  black: "#0033",
};

const ContainerWatchr = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  justify-items: center;
  background-color: #f5f5f7;

  img {
    margin-top: 30px;
    width: 100%;
  }
`;
const ImgTexto = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  line-height: 0.6;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 50px;
  text-align: center;

  height: 20vh;
  padding: 20px;

  h1,
  h3 {
    font-weight: bold;
    color: ${color.dark};

    font-size: 3rem;
  }
  p {
    color: ${color.orange};
    font-size: 1.5rem;
  }
  a {
    /* border: solid 4px red; */
    text-align: center;
    font-size: 1.5rem;
  }
`;

const ImaReloj = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  margin-top: 100px;
  width: 100%;
  img {
    width: 100%;
  }
`;

export { ContainerWatchr, ImgTexto, ImaReloj };
