import styled from 'styled-components';

/* export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  align-items: center;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 955px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
*/

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 20px;
`;
