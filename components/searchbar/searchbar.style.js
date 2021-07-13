import styled from "styled-components";

export const SearchbarContainer = styled.div`
  display: flex;
  background-color: white;
  margin: 50px 20px 30px 20px;
  height: 50px;
  border-radius: 10px;
  background-color: #fdfcfc;
`;
export const SearchbarWrapper = styled.div`
  display: flex;
`;
export const SearchIcon = styled.img`
  height: 16px;
  width: 16px;
  margin: 16px 0 16px 15px;
`;

export const SearchInput = styled.input`
  margin-left: 10px;
  font-size: 16px;
  line-height: 18px;
  outline: none;
  border: none;
  border-radius: 10px;
  font: inherit;
  background-color: #fdfcfc;
  width: 100%;
  :focus {
    outline: none;
    font-weight: 600;
  }
  ::placeholder {
    font-weight: 400;
  }
`;
