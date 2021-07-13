import { NavbarContainer, NavButton } from "./navbar.style";
import Link from "next/link";
import Image from "next/image";

export default function NavbarComponent({ children, ...props }) {
  return (
    <NavbarContainer {...props}>
      <NavButton>
        <Link href="/" passHref>
          <Image
            src="/images/home.svg"
            alt="Home button"
            width={26}
            height={40}
          />
        </Link>
      </NavButton>
      <NavButton>
        <Link href="/libraries" passHref>
          <Image
            src="/images/libraries.svg"
            alt="Libraries button"
            width={36}
            height={40}
          />
        </Link>
      </NavButton>
      <NavButton>
        <Link href="/profile" passHref>
          <Image
            src="/images/profile.svg"
            alt="Profile button"
            width={27}
            height={40}
          />
        </Link>
      </NavButton>
    </NavbarContainer>
  );
}
