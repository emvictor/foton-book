import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  background-color: ${(props) => props.backgroundcolor || "white"};
  border: 1px solid ${(props) => props.backgroundcolor || "black"};
  border-radius: 5px;
  height: 140px;
  width: 272px;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
