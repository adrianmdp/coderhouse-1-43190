import React from "react";
import { useParams } from "react-router-dom";

const Tasks = () => {
  const { id } = useParams();

  // Puedo ir a consultar una api con el id que obtuve del param
  // y mostrar los datos en esta pantalla.

  return (
    <>
      <h1>Tareas</h1>

      {
        // Si existe el id, muestro solo el detalle, si no existe muestro el listado
      }

      <div>Abriendo la tarea {id}</div>
    </>
  );
};

export { Tasks };
