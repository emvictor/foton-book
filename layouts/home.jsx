import { Window, Body } from "./home.style";
import { Header, Card } from "components";

export default function HomeLayout({ children, ...props }) {
  return (
    <Window>
      <Body>
        <Header />

        <Card backgroundcolor="#00173D" />

        <Card backgroundcolor="purple" />

        <div>
          <button>Home</button>
          <br />
          <button>Libraries</button>
          <br />
          <button>Profile</button>
        </div>
      </Body>
    </Window>
  );
}
