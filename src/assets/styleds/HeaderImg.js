import styled from "styled-components";
const colors = {
  dark: "#333",
  white: "#fff",
  orange: "#dd674b",
  gray: "#ccc",
  silver: "#f5f5f7",
  black: "#000",
};
const ComtainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px ${colors.silver};
  border-radius: 1px;
  @media (min-width: 768px) {
    display: none;
  }
  img {
    width: 30px;
  }
`;

export { ComtainerImg };
