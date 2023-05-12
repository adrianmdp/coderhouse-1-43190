import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/common";

const Tasks = () => {
  const { id } = useParams();

  // Puedo ir a consultar una api con el id que obtuve del param
  // y mostrar los datos en esta pantalla.

  const comprar = (event) => {
    event.stopPropagation();
    console.log("Realizar una compra");
  };

  const verProducto = () => {
    console.log("Ver el producto");
  };

  const agregarUsuario = () => {
    console.log("agregar usuario");
  };

  return (
    <>
      <h1>Tareas</h1>

      {
        // Si existe el id, muestro solo el detalle, si no existe muestro el listado
      }

      <div>Abriendo la tarea {id}</div>

      <Card onUserClickCard={agregarUsuario}>
        <h2>Adrián</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          accusantium expedita molestias sed pariatur commodi ex! Dolorum velit
          asperiores, deserunt quisquam voluptatibus cumque placeat hic soluta
          deleniti quas! Perferendis, eaque.
        </p>
      </Card>

      <Card onUserClickCard={verProducto}>
        <h2>Tv 40"</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          tempora minima obcaecati ratione nulla harum iusto dolorum voluptatem
          dicta. Aut totam quibusdam, pariatur obcaecati debitis sed modi minus
          itaque sit?
        </p>
        <div>$100</div>
        <button onClick={comprar}>Comprar</button>
      </Card>

      <Card onUserClickCard={() => console.log("Comprar pan")}>
        <h2>Tv 40"</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          tempora minima obcaecati ratione nulla harum iusto dolorum voluptatem
          dicta. Aut totam quibusdam, pariatur obcaecati debitis sed modi minus
          itaque sit?
        </p>
        <div>$100</div>
        <button onClick={comprar}>Comprar</button>
      </Card>
    </>
  );
};

export { Tasks };
