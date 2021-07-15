import { CardContainer, Card } from "./card.style";
import Image from "next/image";
export default function CardComponent({ children, backgroundcolor, ...props }) {
  return (
    <CardContainer>
      <Card backgroundcolor={backgroundcolor}>
        <Image {...props} alt={props.alt} />
      </Card>
    </CardContainer>
  );
}
