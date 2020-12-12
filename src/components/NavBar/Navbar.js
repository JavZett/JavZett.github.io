import React, { useState } from 'react';
import 'animate.css';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import { BsXSquareFill } from 'react-icons/bs';

export const Navbar = () => {
  const [clickMenu, setClickMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-brand-logo">
          <img src={process.env.PUBLIC_URL + '/logoCetis.png'} alt="Cetis-30" />
          <div className="titulo">
            <h1>Cetis 30</h1>
            <p>"Emiliano Zapata"</p>
          </div>
        </Link>
      </div>
      <ul
        className={
          clickMenu
            ? 'navbar-links navbar-links-active'
            : 'navbar-links navbar-links-no-active'
        }
      >
        <li>
          <NavLink
            exact={true}
            activeClassName="navbar-link-active"
            to="/"
            className="navbar-link"
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            activeClassName="navbar-link-active"
            to="/atencion"
            className="navbar-link"
          >
            Atención
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            activeClassName="navbar-link-active"
            to="/carreras"
            className="navbar-link"
          >
            Carreras
          </NavLink>
        </li>
        <li>
          <a
            href="https://www.bienestarazteca.com"
            className="navbar-link"
            target="_blank"
            rel="noreferrer"
          >
            Becas
          </a>
        </li>
        <li>
          <NavLink
            exact={true}
            activeClassName="navbar-link-active"
            to="/iniciar-sesion"
            className="navbar-link"
          >
            Iniciar sesión
          </NavLink>
        </li>
      </ul>

      <div
        className="menu-icon"
        onClick={() => {
          setClickMenu(!clickMenu);
        }}
      >
        {clickMenu ? (
          <BsXSquareFill className="tache icono" />
        ) : (
          <AiOutlineBars className="barras-menu icono" />
        )}
      </div>
    </nav>
  );
};
