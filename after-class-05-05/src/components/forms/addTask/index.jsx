import { useState } from "react";

const AddTaskForm = ({ onSubmit }) => {
  const [fields, setFields] = useState({
    title: "",
    description: "",
    category: "",
    asignedUser: "",
    owner: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Título</label>
        <input
          type="text"
          name="title"
          value={fields.title}
          onChange={(e) =>
            setFields((prevState) => ({ ...prevState, title: e.target.value }))
          }
        />
      </div>
      <div>
        <label htmlFor="">Descripción</label>
        <input
          type="text"
          name="description"
          value={fields.description}
          onChange={(e) =>
            setFields((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="">Categoría</label>
        <input
          type="text"
          name="category"
          value={fields.category}
          onChange={(e) =>
            setFields((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="">Responsable</label>
        <input
          type="text"
          name="asignedUser"
          value={fields.asignedUser}
          onChange={(e) =>
            setFields((prevState) => ({
              ...prevState,
              asignedUser: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="">Creador</label>
        <input
          type="text"
          name="owner"
          value={fields.owner}
          onChange={(e) =>
            setFields((prevState) => ({ ...prevState, owner: e.target.value }))
          }
        />
      </div>
      <button type="submit">Crear tarea</button>
    </form>
  );
};

export { AddTaskForm };
