import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTasks } from "../../services";

const Tasks = () => {
  const [tasks, setTasks] = useState();
  const [msg, setMsg] = useState("cargando...");

  const [filter, setFilter] = useState({
    q: "",
    category: "",
    user: "",
  });

  useEffect(() => {
    getTasks(filter).then((tasks) => {
      setTasks(tasks);
    });
  }, [filter]);

  if (!tasks) return <p>{msg}</p>;

  return (
    <>
      <form action="">
        <label htmlFor="">Buscar</label>
        <input
          type="text"
          name="q"
          value={filter.q}
          onChange={(e) =>
            setFilter((prevstate) => ({ ...prevstate, q: e.target.value }))
          }
        />
        <select name="" id="">
          <option value="">Compras</option>
          <option value="">Compras</option>
        </select>
        <select name="" id="">
          <option value="">User 1</option>
          <option value="">Compras</option>
        </select>
      </form>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Usuario</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>
                <Link to={`/tasks/${task.id}`}>{task.title}</Link>
              </td>
              <td>{task.description}</td>
              <td>{task.date}</td>
              <td>{task.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export { Tasks };
