import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const TaskDetail = () => {
  const { id } = useParams();

  const [task, setTask] = useState();
  const [msg, setMsg] = useState("cargando...");

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "tasks", id);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        setTask({ id: "", ...doc.data() });
      } else {
        setMsg("No hay datos");
      }
    });
  }, []);

  if (!task) return <p>{msg}</p>;

  return (
    <>
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
          <tr>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.date}</td>
            <td>{task.user}</td>
          </tr>
        </tbody>
      </table>
      <img src={task.image} alt={task.title} />
    </>
  );
};

export { TaskDetail };
