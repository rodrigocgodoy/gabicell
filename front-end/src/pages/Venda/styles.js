import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  /* position: relative; */


  .infos {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%
  }

  .button-criar {
    padding: 15px;
    border-radius: 15px;
    margin: 15px;
    background: #A5BCCB;
    float: right;

    cursor: pointer;
  }

  .button-criar:hover {
    background: #000;
    color: #fff;
  }

  .cards-geral {
    display: flex;
    /* flex-direction: row; */
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cards-geral .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    border-radius: 10px;
    border: 1px solid #000;
    margin: 15px;

    -webkit-box-shadow: 13px 9px 23px -8px rgba(0,0,0,0.55);
    -moz-box-shadow: 13px 9px 23px -8px rgba(0,0,0,0.55);
    box-shadow: 13px 9px 23px -8px rgba(0,0,0,0.55);
  }

  .cards-geral .card:hover {
    transform: scale(1.1);
    transform: translate(5px, 5px);
    box-shadow: 10px 10px 34px 0px rgba(0, 0, 0, 1);
    cursor: pointer;
  }
    
  .cards-geral .card .data,
  .cards-geral .card .titulo-descricao,
  .cards-geral .card .prioridade {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }

  .cards-geral .card .titulo-descricao span:last-child {
    padding-top: 5px;
  }

  .cards-geral .card .div-redondo .redondo {
    height: 20px !important;
    width: 20px !important;
    border-radius: 50%;
    background-color: red;
    border: 1px solid #6F6F6F;
  }

  .cards-geral .card .div-redondo .red { background-color: #FF0001; }
  .cards-geral .card .div-redondo .yellow { background-color: #FFDD02; }
  .cards-geral .card .div-redondo .green { background-color: #14FF01; }

`;