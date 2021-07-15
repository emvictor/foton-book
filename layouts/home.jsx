import { Window, Body } from "./home.style";
import { Header, Card, Navbar } from "components";

export default function HomeLayout({ children, ...props }) {
  return (
    <Window>
      <Body>
        <Header />
        <Card
          backgroundcolor="#00173D"
          src="/images/hooked.svg"
          height={136}
          width={252}
          alt=""
        />
        <Navbar />
      </Body>
    </Window>
  );
}
