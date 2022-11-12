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
    a {
      /* color: red; */
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
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
    top: 15%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      display: block;
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
  top: -900px;
  left: -1000px;
  z-index: -1;
  width: 100%;
  height: 100%;
  transition: all 0.6s ease;

  &.active {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: solid 2px red;
  }
`;

export { ComtainerNav, BgDiv };
