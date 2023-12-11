import styled, { css } from "styled-components";

const StyledDisplay = css`
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  ${StyledDisplay}
  gap: 1.5625rem;

  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1.875rem 1.2813rem 2.625rem;

  font-family: var(--font-secondary);

  button {
    background-color: var(--color-primary);
    border-radius: 0.5rem;
    padding: 0.9063rem;

    font-size: 1rem;
    text-align: center;
    font-weight: 600;
    color: #ffffff;

    transition: background-color 0.2s;
  }

  button:hover {
    background-color: var(--color-primary-2);
  }
`;

export const StyledInputContainer = styled.div`
  ${StyledDisplay}
  gap: .5625rem;

  div {
    ${StyledDisplay}
    gap: .5625rem;
  }

  input,
  select {
    background-color: var(--color-gray-1);
    border: 1px solid transparent;
    border-radius: 0.5rem;
    padding: 0.8438rem 1rem;
    font-size: 1rem;
    transition: border 0.2s;
    outline: none;
  }

  input:focus,
  select:focus {
    border: 1.2px solid var(--color-gray-4);
  }

  span {
    font-family: var(--font-secondary);
  }
`;
