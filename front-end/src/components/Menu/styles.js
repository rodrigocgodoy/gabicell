import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  min-height: 50px;
  padding: 5px 0;
  background: #A5BCCB;

  .div-nomeUser {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .div-nomeUser svg {
    margin: 0 15px;
  }

  .div-iconsSuperior svg {
    margin: 0 20px;
  }

  svg {
    font-size: 35px;
    cursor: pointer;
  }

  input {
    width: 400px;
    padding: 5px 20px;
    font-size: 22px;
    border-radius: 10px;
  }
  
`;