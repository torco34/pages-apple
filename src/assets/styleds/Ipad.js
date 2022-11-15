import styled from "styled-components";
const color = {
  black: "#000000",
  light: "#f5f5f7",
};
const Ipads = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  height: 60vh;

  background-color: ${color.black};
  color: ${color.light};
  h2 {
    text-align: center;
    font-family: Arial;
    font-size: calc(1em + 1.5vw);
    font-weight: bold;
    line-height: 0.9;
    margin-top: 60px;
  }
  .imagen {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    img {
      width: 100%;
    }
  }
  .imageIcono {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
    }
  }
`;
const ParrafoH5 = styled.div`
  width: 100%;

  h5 {
    font-size: calc(0.3em + 0.5vw);
    margin-top: 30px;
    background-color: #333;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export { Ipads, ParrafoH5 };
