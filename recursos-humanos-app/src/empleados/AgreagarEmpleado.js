import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AgregarEmpleado() {
  const navegacion = useNavigate();

  const [empleado, setEmpleado] = useState({
    nombre: '',
    departamento: '',
    sueldo: '',
  });

  const { nombre, departamento, sueldo } = empleado;

  const onInputChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const urlBase = 'http://localhost:8080/rh-app/empleados';
    await axios.post(urlBase, empleado);
    navegacion('/');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow rounded">
            <div className="card-body">
              <h4 className="card-title text-center mb-3 fw-bold">Agregar Empleado</h4>
              <p className="text-muted text-center">Completa el formulario para registrar un nuevo empleado</p>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="departamento" className="form-label">
                    Departamento
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="departamento"
                    name="departamento"
                    value={departamento}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="sueldo" className="form-label">
                    Sueldo
                  </label>
                  <input
                    type="number"
                    step="any"
                    className="form-control"
                    id="sueldo"
                    name="sueldo"
                    value={sueldo}
                    onChange={onInputChange}
                  />
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-success me-2">
                    <i className="bi bi-plus-circle"></i> Agregar
                  </button>
                  <a href="/" className="btn btn-secondary">
                    <i className="bi bi-arrow-left-circle"></i> Regresar
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
