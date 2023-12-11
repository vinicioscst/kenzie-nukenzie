import { StyledBodyText, StyledTitle3 } from "../../styles/typography";
import { StyledDeleteFooter, StyledDeleteHeader, StyledCard } from "./style";

const Card = ({ entry, removeEntry }) => {
  const value = +entry.value;
  const formattedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <StyledCard entryType={entry.type}>
      <StyledDeleteHeader>
        <StyledTitle3>{entry.description}</StyledTitle3>
        <StyledBodyText>{entry.type}</StyledBodyText>
      </StyledDeleteHeader>
      <StyledDeleteFooter>
        <StyledBodyText>{formattedValue}</StyledBodyText>
        <button onClick={() => removeEntry(entry.id)}>Excluir</button>
      </StyledDeleteFooter>
    </StyledCard>
  );
};

export default Card;
