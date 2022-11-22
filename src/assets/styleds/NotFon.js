import styled from "styled-components";
const colors = {
  dark: "#333",
  white: "#fff",
  orange: "#dd674b",
  gray: "#ccc",
  silver: "#f5f5f7",
  black: "#000",
};
const ContainerNot = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  justify-items: center;
  align-items: center;
  font-family: Arial;
  text-align: center;
  background-color: ${colors.black};
  color: ${colors.white};
  height: 100vh;
  font-size: 2rem;

  a {
    text-decoration: none;
    color: ${colors.white};
    font-size: 1.6rem;
  }
  span {
    color: ${colors.orange};
  }
`;

export { ContainerNot };
