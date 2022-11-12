import styled from "styled-components";
const colors = {
  dark: "#333",
  white: "#fff",
  orange: "#dd674b",
  gray: "#ccc",
  silver: "#f5f5f7",
  black: "#000",
};
const ComtainerNav = styled.div`
  font-family: Arial;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  /* border: solid 2px blue; */
  &.active {
  }
  background-color: ${colors.dark};
  ul {
    /* margin: auto; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* border: solid 2px red; */

    li {
      list-style: none;
    }
    a {
      text-decoration: none;
      font-family: "Arial";
      margin-top: 10px;
      margin: 20px;
    }
  }
  .link {
    position: absolute;
    transition: all 0.6s ease;
    top: -800px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        display: inline;
      }
    }
  }

  .burgue {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export { ComtainerNav };
