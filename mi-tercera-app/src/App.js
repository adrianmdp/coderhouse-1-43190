import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AddTask,
  Categories,
  Dashboard,
  Login,
  TaskDetail,
  Tasks,
  Users,
} from "./pages";
import { AddTaskForm, Footer, Menu } from "./components";
import { AuthContext, AuthProvider } from "./contexts";
import { useContext } from "react";

function App() {
  const { userName } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/tasks/add" element={<AddTask />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
