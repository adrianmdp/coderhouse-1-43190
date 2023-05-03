import { useState } from "react";
import { Button } from "./components/Button";
import { Radio } from "./components/Radio";
import { Modal } from "./components/Modal";

const users = [
  { name: "Adrián", lastname: "Solimano", age: 40 },
  { name: "Agostina", lastname: "Solimano", age: 5 },
];

const elements = [<div>Hola mundo 1</div>, <div>Hola mundo 2</div>];

const App = () => {
  // const rta = users.map((user) => {
  //   return { ...user, country: "Argentina", asd: [1, 2, 3] };
  // });

  // console.log(rta);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => user.age > 1)
            .map((user) => {
              return (
                <tr onClick={() => console.log("Hola mundo")}>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>
                    <button
                      onClick={() =>
                        console.log("Agregar al carrito", user.name)
                      }
                    >
                      Comprar
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {JSON.stringify(users)}
    </>
  );
};

export default App;
