import {
  AddTaskPage,
  Dashboard,
  Login,
  SignUp,
  AddCategory,
  Tasks,
} from "./pages";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/add-task">Agregar tarea</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="http://undiario.com.ar" target="_blank">
            Ir al diario
          </a>
        </li>
      </ul>

      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/tasks/:id" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
