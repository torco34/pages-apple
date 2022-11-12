import styled from "styled-components";
const colors = {
  black: "#222",
};
const ContainerVert = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 36px;

  transition: all 0.6s ease;
  text-align: center;
  align-items: center;
  justify-content: center;
  z-index: 5;
  background-color: ${colors.black};

  ul {
    display: block;
    height: 70vh;
  }
  li {
    margin-top: 30px;
  }
`;

export { ContainerVert };
