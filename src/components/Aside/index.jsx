import Form from "../Form";
import Balance from "../Balance";
import { StyledAside } from "./style";

const Aside = ({ entryList, setEntryList }) => {
  return (
    <StyledAside>
      <Form setEntryList={setEntryList} />
      {entryList.length > 0 ? <Balance entryList={entryList} /> : ""}
    </StyledAside>
  );
};

export default Aside;
