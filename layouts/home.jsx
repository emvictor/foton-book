import { Window, Body } from "./home.style";
import { Header, Card, Navbar } from "components";

export default function HomeLayout({ children, ...props }) {
  return (
    <Window>
      <Body>
        <Header />

        <Card backgroundcolor="#00173D" />

        <Card backgroundcolor="purple" />

        <Navbar />
      </Body>
    </Window>
  );
}
