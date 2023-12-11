import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  min-width: clamp(225px, 100%, 560px);
  flex-grow: 1;

  h3 {
    font-size: 1rem;
  }
`;
