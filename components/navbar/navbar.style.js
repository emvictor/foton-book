import styled from "styled-components";

export const NavbarContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
`;

export const NavButton = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 10px;
  line-height: 12px;
  :hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;
