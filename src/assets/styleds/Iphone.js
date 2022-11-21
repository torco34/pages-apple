import styled from "styled-components";

const ContainerIphone = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  div {
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
  }
`;

export { ContainerIphone };
