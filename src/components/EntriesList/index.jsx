import Card from "../Card";
import { StyledList } from "./style";

const EntriesList = ({ entryList, setEntryList }) => {
  const removeEntry = (entryId) => {
    if (confirm("Você deseja excluir esse lançamento?")) {
      setEntryList((entryList) =>
        entryList.filter((entry) => entry.id !== entryId)
      );
    }
  };

  return (
    <StyledList>
      {entryList.map((entry) => (
        <Card key={entry.id} entry={entry} removeEntry={removeEntry} />
      ))}
    </StyledList>
  );
};

export default EntriesList;
