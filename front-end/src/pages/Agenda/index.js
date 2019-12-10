import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import api from "../../services/api";
import { formatDate } from '../../utils/util';
import Menu from '../../components/Menu';
import { Container } from "./styles";

const Agenda = () => {
  const [agenda, setAgenda] = useState([]);
  // const [error, setError] = useState('');
  
  useEffect(() => {
    async function loadAgenda() {
      const response = await api.get("/agenda");
      setAgenda(response.data)
      // setError('Error, ao tentar requisição de Agenda')
    }
    loadAgenda()
  }, [])
  
  return (
    <>
      <Menu />
      <Container>
        <div className="infos">
          <button class='button-criar'>Criar Compromisso</button>
        </div>
        <div className="cards-geral">
          {agenda.map(agenda => (
            // <Link to={`/edit/agenda/${agenda.id}`} key={agenda.id}>
              <div key={agenda.id} className="card">
                <div className="data">
                  <span>{`${agenda.date.substring(2, 0)}`}</span>
                  <span>{`${formatDate(agenda.date.substring(3, 5))}`}</span>
                </div>
                <div className="titulo-descricao">
                  <span>{`Title: ${agenda.title}`}</span>
                  <span>{`Descrição: ${agenda.description}`}</span>
                </div>
                <div className="prioridade">
                  <div className="div-redondo">
                    <div className={`redondo ` + agenda.priority}></div>
                  </div>
                </div>
              </div>
            // </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Agenda;