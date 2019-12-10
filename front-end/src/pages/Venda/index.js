import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import api from "../../services/api";
import { formatDate } from '../../utils/util';
import Menu from '../../components/Menu';
import { Container } from "./styles";

const Venda = () => {
  const [venda, setVenda] = useState([]);
  // const [error, setError] = useState('');
  
  useEffect(() => {
    async function loadVenda() {
      const response = await api.get("/vendas");
      setVenda(response.data)
      // setError('Error, ao tentar requisição de Venda')
    }
    loadVenda()
  }, [])
  
  return (
    <>
      <Menu />
      <Container>
        <div className="infos">
          <button class='button-criar'>Criar Venda</button>
        </div>
        <div className="cards-geral">
          {venda.map(venda => (
            // <Link to={`/edit/venda/${venda.id}`} key={venda.id}>
              <div key={venda.id} className="card">
                <div className="data">
                  <span>{`Valor: ${venda.valor_total}`}</span>
                  <span>{`Qtd: ${venda.quantidade}`}</span>
                </div>
                <div className="titulo-descricao">
                  <span>{`Nome: ${venda.name_cliente}`}</span>
                  <span>{`Documento: ${venda.doc_cliente}`}</span>
                </div>
                <div className="prioridade">
                  <span>Produto: iPhone 8 Plus</span>
                </div>
              </div>
            // </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Venda;