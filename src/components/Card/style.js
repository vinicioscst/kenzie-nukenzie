import styled, { css } from "styled-components";

const defaultDisplay = css`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: flex-start;
`;

export const StyledCard = styled.li`
  ${defaultDisplay}

  padding: .5rem .875rem;

  background: var(--color-gray-1);
  border-radius: 0.25rem;
  border-left: ${({ entryType }) =>
    entryType === "Entrada"
      ? "4px solid var(--color-secondary)"
      : "4px solid var(--color-gray-2)"};
  transition: background 0.2s;
  transition: box-shadow 0.2s;

  :hover {
    background: #ffffff;
    box-shadow: 0px 4px 42px -12px rgba(0, 0, 0, 0.25);
  }

  h3 {
    margin-bottom: 0.3125rem;
  }

  p:first-of-type {
    color: var(--color-gray-3);
  }

  button {
    background: var(--color-gray-2);
    padding: 0.1875rem 0.5625rem;
    border-radius: 2px;
    transition: background 0.2s;
    transition: color 0.2s;
  }

  button:hover {
    background: var(--color-gray-4);
    color: var(--color-gray-2);
  }

  @media (min-width: 955px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledDeleteHeader = styled.div`
  ${defaultDisplay}
`;

export const StyledDeleteFooter = styled.div`
  ${defaultDisplay}

  @media (min-width: 955px) {
    align-items: flex-end;
  }
`;
