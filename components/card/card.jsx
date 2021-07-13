import { CardContainer, Card } from "./card.style";

export default function CardComponent({ children, ...props }) {
  return <CardContainer {...props}>{children}</CardContainer>;
}
