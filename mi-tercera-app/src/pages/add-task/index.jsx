import { useState } from "react";
import { AddTaskForm } from "../../components";
import { createTask } from "../../services";

const AddTask = () => {
  const [taskId, setTaskId] = useState("");

  const addTask = (data) => {
    createTask(data).then((taskId) => {
      setTaskId(taskId);
    });

    // Una vez que existe la tarea, podría asociarla a otro elemento
  };

  return <AddTaskForm onSend={addTask} />;
};

export { AddTask };
