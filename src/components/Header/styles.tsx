import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:space-between;

  p {
    font-size: 1.4rem;
    padding: 1rem;
    font-weight: bold;

    

  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 768px){
      width: 40%;
      
    }

    @media only screen and (min-width: 992px){
      width: 30%;
      
    }

    @media only screen and (min-width: 1200px){
      width: 10%;
      
    }

    p {
      font-size: 1rem;
      font-weight: normal;
    }
  }
`