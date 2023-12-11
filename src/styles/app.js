import styled from "styled-components";

export const StyledAppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  
  width: 100%;
  max-width: 975px;
  padding: 0 10px;
  margin: 1.875rem auto;

  @media (min-width: 500px) and (max-width: 989px) {
    padding: 0 30px;
  }

  @media (min-width: 955px) {
    gap: 2.5rem;
  } 
`;