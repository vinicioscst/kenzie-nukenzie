import styled from "styled-components";

export const StyledBalance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  padding: 1.25rem;
  border: 0.0625rem solid var(--color-gray-2);
  border-radius: 0.25rem;
`;

export const StyledBalanceHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h3:last-of-type {
    color: var(--color-primary);
  }

  p {
    color: var(--color-gray-3);
  }
`;
