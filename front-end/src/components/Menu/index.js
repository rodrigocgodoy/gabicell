import React from 'react';
import { 
  FaUserAlt,
  FaShoppingBag,
  FaMailBulk,
  FaHome,
  FaSignOutAlt,
  FaBars
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Menu = () => {
  return (
    <Container>
      <div className="div-nomeUser">
        <FaUserAlt />
        <span>Rodrigo Godoy</span>
      </div>
      <div>
        <input type="text" placeholder="O que deseja?"/>
      </div>
      <div className="div-iconsSuperior">
        <Link to='/venda'>
          <FaShoppingBag />
        </Link>
        {/* <FaMailBulk /> */}
        <Link to='/home'>
          <FaHome />
        </Link>
        <Link to='/'>
          <FaSignOutAlt />
        </Link>
        <FaBars />
      </div>
    </Container>
  );
}

export default Menu;
