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

  background-color: ${colors.dark};
  ul {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    border: solid 2px red;

    li {
      list-style: none;
    }
    a {
      text-decoration: none;
      font-family: "Arial";
      font-size: 11px;
      &:hover {
        color: #1774d1;
      }
    }
  }
  .link {
    position: absolute;
    transition: all 0.6s ease;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a {
      color: red;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      /* display: none; */
      position: initial;
      margin: 0;
      a {
        color: #000;
        font-size: 1rem;
        display: inline;
      }
    }
  }
  .link.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      color: #000;
    }
  }
  .burgue {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
const BgDiv = styled.div`
  position: absolute;
  background-color: #222;
  top: -700px;
  left: -1000px;
  z-index: -1;
  width: 100%;
  height: 100%;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export { ComtainerNav, BgDiv };
