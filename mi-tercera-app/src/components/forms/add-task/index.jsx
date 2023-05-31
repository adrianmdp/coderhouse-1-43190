import { useState } from "react";

const AddTaskForm = ({ onSend }) => {
  const [fields, setFields] = useState({
    date: "",
    description: "",
    title: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Fecha</label>
        <input
          type="date"
          name="date"
          value={fields.date}
          onChange={(e) =>
            setFields((prevState) => ({ ...prevState, date: e.target.value }))
          }
        />
      </div>

      <div>
        <label htmlFor="description">Descripción</label>
        <textarea
          name="description"
          id="description"
          value={fields.description}
          onChange={(e) =>
            setFields((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
        ></textarea>
      </div>

      <div>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={fields.title}
          onChange={(e) =>
            setFields((prevState) => ({ ...prevState, title: e.target.value }))
          }
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export { AddTaskForm };
