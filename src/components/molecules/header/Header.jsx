import React from 'react';
import { Link } from 'react-router-dom';
import {  ContainerHeader, Menunav } from './headerStyles';

const Header = () => {
  return (
    <ContainerHeader>
    <div></div>
      <Menunav>
        <Link to={'/products'}>
          <h4>Productos</h4>
        </Link>
        <Link to={'/customers'}>
          <h4>Clientes</h4>
        </Link>
        <Link to={'/braches'}>
          <h4>Marcas</h4>
        </Link>
        <Link to={'#'}>
          <h4>Usuario</h4>
        </Link>
      </Menunav>
    </ContainerHeader>
  );
};

export { Header };
