import styled from 'styled-components';
import { theme } from '../../static/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  outline: none;
  border-radius: 5px;
  max-width: 400px;
  background-color: ${theme.pallete.white};
  img {
    align-self: center;
    width: 100%;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
  }

  strong {
    font-size: 1rem;
    font-weight: 600;
    margin-left: 1rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin-left: 1rem;
  }
`;
