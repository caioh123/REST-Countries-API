import styled from 'styled-components';
import { theme } from '../../static/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0 0 2rem;

  div {
    display: flex;
    align-items: center;
    background-color: ${theme.pallete.white};
    border-radius: 5%;
    padding-left: 1rem;
    input {
      margin-left: 1rem;
      background-color: ${theme.pallete.white};
      outline: none;
      height: 7vh;
      border: 0;
      width: 50vw;
    }
  }
`;
