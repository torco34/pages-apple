import styled from "styled-components";
const colors = {
  dark: "#333",
  white: "#fff",
  orange: "#dd674b",
  gray: "#ccc",
  silver: "#f5f5f7",
  black: "#000",
};
const ComtainerApp = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  justify-items: center;
  font-family: Arial;
`;

export { ComtainerApp };
