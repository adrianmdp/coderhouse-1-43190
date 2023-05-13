import { useState } from "react";
import { Card } from "../../common";

const Cards = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  return (
    <div className="cards">
      {tasks.map((task, i) => (
        <Card
          title={task.title}
          asignedUser={task.asignedUser}
          category={task.category}
          description={task.description}
          owner={task.owner}
          key={i}
        />
      ))}
    </div>
  );
};

export { Cards };
