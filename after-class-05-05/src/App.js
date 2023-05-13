import { AddCategory, AddTaskPage } from "./pages";
import { Dashboard } from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/add-task" element={<AddTaskPage />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/add-category/:id" element={<AddCategory />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
