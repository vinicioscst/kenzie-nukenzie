import { useState } from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import { StyledAppContainer } from "./styles/app";
import { GlobalStyles } from "./styles/global";
import { GlobalReset } from "./styles/reset";

function App() {
  const [entryList, setEntryList] = useState([]);

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <StyledAppContainer>
        <Aside entryList={entryList} setEntryList={setEntryList} />
        <Main entryList={entryList} setEntryList={setEntryList} />
      </StyledAppContainer>
    </>
  );
}

export default App;
