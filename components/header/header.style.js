import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 182px;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 400;
  font-family: inherit;
  line-height: 29px;
  margin-left: 20px;
  color: #54565a;
  & > span {
    color: #ff6978;
    font-weight: 600;
  }
`;
