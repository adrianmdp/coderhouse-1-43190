import { useState, useEffect } from "react";
import { AddTaskForm, Footer, Header } from "../../components";

const AddTaskPage = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  const crearTarea = (data) => {
    setTasks((prevState) => [...prevState, data]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header />
      <h1>Agregar nueva tarea</h1>
      <AddTaskForm onSubmit={crearTarea} />

      <table border={1}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Responsable</th>
            <th>Autor</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <tr key={i}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.category}</td>
              <td>{task.asignedUser}</td>
              <td>{task.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </>
  );
};

export { AddTaskPage };
