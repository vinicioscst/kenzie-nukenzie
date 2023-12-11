import { StyledBodyText, StyledTitle3 } from "../../styles/typography";
import { StyledBalance, StyledBalanceHeader } from "./style";

const Balance = ({ entryList }) => {
  const filterMoneyIn = entryList.filter((entry) => entry.type === "Entrada");

  const moneyIn = filterMoneyIn.map((entry) => +entry.value);

  const sumMoneyIn = moneyIn.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );


  const filterMoneyOut = entryList.filter((entry) => entry.type === "Despesa");

  const moneyOut = filterMoneyOut.map((entry) => +entry.value);
  
  const sumMoneyOut = moneyOut.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );


  const balance = sumMoneyIn - sumMoneyOut;

  const formattedBalance = balance.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <StyledBalance>
      <StyledBalanceHeader>
        <StyledTitle3>Valor total:</StyledTitle3>
        <StyledTitle3>{formattedBalance}</StyledTitle3>
      </StyledBalanceHeader>
      <StyledBodyText>O valor se refere ao saldo</StyledBodyText>
    </StyledBalance>
  );
};

export default Balance;
