import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  background-color: ${(props) => props.backgroundcolor || "white"};
  border: 1px solid ${(props) => props.backgroundcolor || "black"};
  height: 140px;
`;

export const CardContainer = styled.div`
  width: 100%;
`;
