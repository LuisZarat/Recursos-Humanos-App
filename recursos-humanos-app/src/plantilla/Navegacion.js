import React from 'react';
import { Link } from 'react-router-dom';

export default function Navegacion() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            <i className="bi bi-building"></i> Recursos Humanos L.A
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <i className="bi bi-house-door-fill"></i> Inicio
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/agregar">
                  <i className="bi bi-person-plus-fill"></i> Agregar Empleado
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}


