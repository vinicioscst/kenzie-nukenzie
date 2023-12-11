import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { StyledHelperText, StyledLabelText } from "../../styles/typography";
import { StyledForm, StyledInputContainer } from "./style";

const Form = ({ setEntryList }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const addEntry = () => {
    const newEntry = { id: uuidv4(), description, value, type };
    setEntryList((entryList) => [...entryList, newEntry]);
  };

  const submit = (e) => {
    e.preventDefault();
    addEntry();
    setDescription("");
    setValue("");
    setType("");
  };

  return (
    <StyledForm onSubmit={submit}>
      <StyledInputContainer>
        <div>
          <StyledLabelText htmlFor="description">Descrição</StyledLabelText>
          <input type="text" id="description" placeholder="Digite aqui sua descrição" value={description} onChange={(e) => setDescription(e.target.value)} required />
          <StyledHelperText>Ex: Compra de roupas</StyledHelperText>
        </div>

        <div>
          <StyledLabelText htmlFor="value">Valor (R$)</StyledLabelText>
          <input type="number" id="value" placeholder="1" value={value} onChange={(e) => setValue(e.target.value)} required />
        </div>

        <div>
          <StyledLabelText htmlFor="type">Tipo de valor</StyledLabelText>
          <select id="type" value={type} onChange={(e) => setType(e.target.options[e.target.selectedIndex].value)} required>
            <option value="" hidden>Selecionar Valor</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </StyledInputContainer>

      <button>Inserir valor</button>
    </StyledForm>
  );
};

export default Form;
