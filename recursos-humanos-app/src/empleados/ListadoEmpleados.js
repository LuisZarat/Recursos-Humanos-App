import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListadoEmpleados() {
  const urlBase = 'http://localhost:8080/rh-app/empleados';
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    const resultado = await axios.get(urlBase);
    setEmpleados(resultado.data);
  };

  const eliminarEmpleado = async (id) => {
    await axios.delete(`${urlBase}/${id}`);
    cargarEmpleados();
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Listado de Empleados</h2>
        <p className="text-muted">Visualiza y administra a los empleados registrados</p>
      </div>

      <div className="table-responsive shadow rounded">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col"># ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Departamento</th>
              <th scope="col">Sueldo</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((empleado, indice) => (
              <tr key={indice}>
                <th scope="row">{empleado.idEmpleado}</th>
                <td>{empleado.nombre}</td>
                <td>{empleado.departamento}</td>
                <td>
                  <NumericFormat
                    value={empleado.sueldo}
                    displayType={'text'}
                    thousandSeparator=","
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale
                  />
                </td>
                <td className="text-center">
                  <div className="d-flex justify-content-center gap-2">
                    <Link
                      to={`/editar/${empleado.idEmpleado}`}
                      className="btn btn-outline-warning btn-sm"
                    >
                      <i className="bi bi-pencil-fill"></i> Editar
                    </Link>
                    <button
                      onClick={() => eliminarEmpleado(empleado.idEmpleado)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      <i className="bi bi-trash-fill"></i> Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {empleados.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No hay empleados registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
