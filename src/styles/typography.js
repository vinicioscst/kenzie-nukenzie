import styled, { css } from "styled-components";

const TextDefaultStyles = css`
  font-style: normal;
  text-decoration: none;
  text-transform: none;
`;

export const StyledTitle1 = styled.h1`
  ${TextDefaultStyles}
  font-size: 2.375rem;
  font-weight: 800;
  line-height: 3rem;
`;

export const StyledTitle2 = styled.h2`
  ${TextDefaultStyles}
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 2.125rem;
`;

export const StyledTitle3 = styled.h3`
  ${TextDefaultStyles}
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.875rem;
`;

export const StyledTitle4 = styled.h4`
  ${TextDefaultStyles}
  font-size: .75rem;
  font-weight: 600;
  line-height: 1.625rem;
`;

export const StyledHeadlineText = styled.span`
  ${TextDefaultStyles}
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625rem;
`;

export const StyledBodyText = styled.p`
  ${TextDefaultStyles}
  font-size: .75rem;
  font-weight: 400;
  line-height: 1.375rem;
`;

export const StyledHelperText = styled.span`
  ${TextDefaultStyles}
  font-family: var(--font-secondary);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: #868e96;
`;

export const StyledLabelText = styled.label`
  ${TextDefaultStyles}
  font-family: var(--font-secondary);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.375rem;
`;
