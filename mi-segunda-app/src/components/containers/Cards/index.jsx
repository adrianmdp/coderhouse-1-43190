import { useState } from "react";
import { Card } from "../../common";

const Cards = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  return (
    <div className="cards">
      {tasks.map((task) => (
        <Card {...task} />
      ))}
    </div>
  );
};

export { Cards };
