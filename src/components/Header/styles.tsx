import styled from 'styled-components';
import { theme } from '../../static/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  background-color: ${theme.pallete.background.all};

  p {
    font-size: 1.4rem;
    padding: 1rem;
    font-weight: bold;
    background-color: ${theme.pallete.background.all};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.pallete.background.all};

    @media only screen and (min-width: 768px) {
      width: 40%;
    }

    @media only screen and (min-width: 992px) {
      width: 30%;
    }

    @media only screen and (min-width: 1200px) {
      width: 10%;
    }

    p {
      font-size: 1.2rem;
      font-weight: normal;
    }
  }
`;
