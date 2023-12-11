import { StyledTitle2 } from "../../styles/typography";
import EntriesList from "../EntriesList";
import { StyledMain } from "./style";

const Main = ({ entryList, setEntryList }) => {
  return (
    <StyledMain>
      <h3>Resumo financeiro</h3>
      {entryList.length > 0 ? (
        <EntriesList entryList={entryList} setEntryList={setEntryList} />
      ) : (
        <StyledTitle2>Você ainda não possui nenhum lançamento</StyledTitle2>
      )}
    </StyledMain>
  );
};

export default Main;
