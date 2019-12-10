import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import api from "../../services/api";
import { formatDate } from '../../utils/util';
import Menu from '../../components/Menu';
import { Container } from "./styles";

const Produto = () => {
  const [produto, setProduto] = useState([]);
  // const [error, setError] = useState('');
  
  useEffect(() => {
    async function loadProduto() {
      const response = await api.get("/produto");
      setProduto(response.data)
      // setError('Error, ao tentar requisição de Produto')
    }
    loadProduto()
  }, [])
  
  return (
    <>
      <Menu />
      <Container>
        <div className="infos">
          <button class='button-criar'>Criar Produto</button>
        </div>
        <div className="cards-geral">
          {produto.map(produto => (
            <div key={produto.id} className="card">
              <div className="data">
                <span>{`Produto: ${produto.nome}`}</span>
                <span>{`Qtd: ${produto.quantidade}`}</span>
                <span>{`Valor: ${produto.valor}`}</span>
              </div>
              <div className="titulo-descricao">
                <span>{`Descrição: ${produto.descricao}`}</span>
                <span>{`Categoria: ${produto.categoria}`}</span>
                <span>{`Fornecedor: ${produto.fornecedor}`}</span>
              </div>
              <div className="prioridade">
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Produto;