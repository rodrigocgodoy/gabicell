import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCalendarAlt,
  FaShoppingCart,
  FaChartLine,
  FaTags,
  FaPaperclip,
  FaMobileAlt
} from 'react-icons/fa';

import api from "../../services/api";
import { Container } from "./styles";
import Menu from '../../components/Menu';

const Home = (props) => {

  const [agenda, setAgenda] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/agenda");
      setAgenda(response.data)
    }
    fetchData()
    console.log(agenda)
  })
  return (
    <>
      <Menu />
      <Container>
        <div className="row">
          <div className="caixa">
            <Link to={`/agenda`}>
              <FaCalendarAlt />
              <span>Agenda</span>
            </Link>
          </div>
          <div className="caixa">
            <Link to={`/venda`}>
              <FaShoppingCart />
              <span>Vendas</span>
            </Link>
          </div>
          {/* <div className="caixa">
            <Link to={`/agenda`}>
              <FaChartLine />
              <span>Relatório</span>
            </Link>
          </div> */}
          <div className="caixa">
            <Link to={`/produto`}>
              <FaTags />
              <span>Produto</span>
            </Link>
          </div>
          <div className="caixa">
            <Link to={`/orcamento`}>
              <FaPaperclip />
              <span>Orçamento</span>
            </Link>
          </div>
          <div className="caixa">
            <Link to={`/estoque`}>
              <FaMobileAlt />
              <span>Estoque</span>
            </Link>
          </div>
        </div>

        <div className="agenda">
          <div className="caixaAgenda">
            <div className="titleAgenda">Agenda</div>
            <table>
              <tbody>
                {agenda.map( agenda => (
                  <tr key={agenda.title}>
                    <td className="div-date">
                      {/* <span>Abr</span>
                        <span>30</span> */}
                      <span>{agenda.date}</span>
                    </td>
                    <td className="div-descripition">
                      <span>{agenda.title}</span>
                      <span>{agenda.description}</span>
                    </td>
                    <td className="div-redondo">
                      <div className={`redondo ` + agenda.priority}></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;