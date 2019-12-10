import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  /* overflow: hidden; */

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
    width: 100vw;
  }

  .row .caixa a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 20px;
    font-size: 25px;
    border: 1px solid #c6c6c6;
    background-color: #c6c6c6;
    margin: 25px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    -webkit-box-shadow: 13px 9px 23px -8px rgba(0,0,0,0.55);
    -moz-box-shadow: 13px 9px 23px -8px rgba(0,0,0,0.55);
    box-shadow: 13px 9px 23px -8px rgba(0,0,0,0.55);
  }

  .row .caixa a:hover {
    transform: scale(1.1);
    transform: translate(5px, 5px);
    box-shadow: 10px 10px 34px 0px rgba(0, 0, 0, 1);
    cursor: pointer;
  }

  .row .caixa svg {
    font-size: 100px;
    margin-bottom: 15px;
  }

  .agenda {
    width: 700px;
    margin-top: 35px;
    padding: 5px;
  }

  .agenda .caixaAgenda {
    width: 100%;
    background-color: #C6C6C6;
    border-radius: 10px;
    padding: 0 15px 15px 15px;
    border: 1px solid #6F6F6F;
    height: 450px;
    -webkit-box-shadow: 13px 9px 23px -8px rgba(0,0,0,0.55);
    -moz-box-shadow: 13px 9px 23px -8px rgba(0,0,0,0.55);
    box-shadow: 13px 9px 23px -8px rgba(0,0,0,0.55);
  }

  .agenda .caixaAgenda table {
    width: 100%;
  }

  .agenda .caixaAgenda table tr {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #6F6F6F;
    border-bottom: none;
    padding: 5px 0; 
  }

  .agenda .caixaAgenda table tr:last-child {
    border-bottom: 1px solid #6F6F6F;
  }

  .agenda .caixaAgenda table tr:nth-child(odd){
    background: #CFFBC9;
  }

  .agenda .caixaAgenda table tr:nth-child(even){
    background: #F4F5F8;
  }

  .agenda .caixaAgenda .titleAgenda {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 15px 0;
    min-height: 35px;
    font-size: 30px;
  }

  .agenda .caixaAgenda .div-date, 
  .agenda .caixaAgenda .div-redondo, 
  .agenda .caixaAgenda .div-descripition {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .agenda .caixaAgenda .div-redondo .redondo {
    height: 20px !important;
    width: 20px !important;
    border-radius: 50%;
    background-color: red;
    border: 1px solid #6F6F6F;
  }

  .agenda .caixaAgenda .div-redondo .red { background-color: #FF0001; }
  .agenda .caixaAgenda .div-redondo .yellow { background-color: #FFDD02; }
  .agenda .caixaAgenda .div-redondo .green { background-color: #14FF01; }

`;