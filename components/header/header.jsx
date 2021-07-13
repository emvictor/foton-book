import { Header, UserName } from "./header.style";
import { Searchbar } from "components";
export default function HeaderComponent({ children, ...props }) {
  return (
    <Header {...props}>
      <Searchbar />
      <UserName>
        Hi, <span>Emival!</span>
      </UserName>
    </Header>
  );
}
