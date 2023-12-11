import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;

  background-color: var(--color-gray-1);
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
`;

export const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 975px;
  padding: 25.5px 10px;

  
  @media (min-width: 500px) and (max-width: 989px) {
    padding: 25.5px 30px;
  }
`;
