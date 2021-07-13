import { SearchbarContainer, SearchIcon, SearchInput } from "./searchbar.style";

export default function SearchbarComponent({ children, ...props }) {
  return (
    <SearchbarContainer>
      <SearchIcon src="./images/search.svg" />
      <SearchInput placeholder="Search book"></SearchInput>
    </SearchbarContainer>
  );
}
