import styled from "styled-components";
import Link from "next/link";
import { Window, Body } from "../layouts/home.style";
import { Navbar } from "components";

export default function Libraries({ children, ...props }) {
  return (
    <Window>
      <Body>
        <Textbox>
          <MainText>I am sorry!</MainText>
          <Text>This page is not available yet :(</Text>
          <Text>
            Try going back{" "}
            <span>
              <Link href="/">Home</Link>
            </span>{" "}
            instead.
          </Text>
        </Textbox>
        <Navbar />
      </Body>
    </Window>
  );
}

const Textbox = styled.div`
  width: 100%;
  position: absolute;
  top: 25%;
  padding: 0 0 10px 20px;
`;

const MainText = styled.h1`
  font-family: inherit;
  font-size: 28px;
  line-height: 16px;
  font-weight: 600;
  padding-bottom: 20px;
`;

const Text = styled.h2`
  font-family: inherit;
  font-size: 18px;
  padding-bottom: 10px;
  & > span {
    :hover {
      color: blue;
      background-color: rgba(0, 0, 0, 0.02);
    }
  }
`;
