import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import api from "../../services/api";
import { formatDate } from '../../utils/util';
import Menu from '../../components/Menu';
import { Container } from "./styles";

const Estoque = () => {
  const [estoque, setEstoque] = useState([]);
  // const [error, setError] = useState('');
  
  useEffect(() => {
    async function loadEstoque() {
      const response = await api.get("/estoque");
      setEstoque(response.data)
      // setError('Error, ao tentar requisição de Estoque')
    }
    loadEstoque()
  }, [])
  
  return (
    <>
      <Menu />
      <Container>
        <div className="infos">
          <button class='button-criar'>Criar Estoque</button>
        </div>
        <div className="cards-geral">
          {estoque.map(estoque => (
            // <Link to={`/edit/estoque/${estoque.id}`} key={estoque.id}>
              <div key={estoque.id} className="card">
                <div className="data">
                  <span>{`Produto: iPhone 8 Plus 128gb`}</span>
                  {/* <span>{`Qtd: ${estoque.quantidade}`}</span> */}
                </div>
                <div className="titulo-descricao">
                  <span>{`Qtd: ${estoque.quantidade}`}</span>
                  {/* <span>{`Documento: ${estoque.doc_cliente}`}</span> */}
                </div>
                {/* <div className="prioridade">
                  <span>Produto: iPhone 8 Plus</span>
                </div> */}
              </div>
            // </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Estoque;