import styled from 'styled-components';
import { theme } from '../../static/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  @media only screen and (max-width: 768px) {
    display: grid;
  }
  div {
    display: flex;
    align-items: center;
    background-color: ${theme.pallete.white};
    border-radius: 5%;
    padding-left: 1rem;
    padding-right: 1rem;

    input {
      margin-left: 1rem;
      background-color: ${theme.pallete.white};
      outline: none;
      height: 7vh;
      border: 0;
      width: 50vw;

      @media only screen and (max-width: 768px) {
        width: 60vw;
      }
    }
  }

  select {
    background-color: ${theme.pallete.white};
    padding: 1rem;
    border: none;
    border-radius: 5px;
    width: 30vw;
    @media only screen and (max-width: 768px) {
      margin-top: 2rem;
      width: 40vw;
    }
  }
`;
