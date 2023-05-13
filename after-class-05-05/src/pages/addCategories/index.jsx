import { useEffect, useState } from "react";
import { AddCategoryForm, Footer, Header } from "../../components";
import { useNavigate, useParams } from "react-router-dom";

const AddCategory = () => {
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );

  const [selectedCat, setSelectedCat] = useState();

  const navigate = useNavigate();
  const params = useParams();

  const agregarCategoria = (values) => {
    setCategories((prevState) => [...prevState, values]);
  };

  const borrarCategoria = (cat) => {
    setCategories(categories.filter((elem) => elem.name !== cat));
  };

  const actualizarCategoria = () => {};

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    setSelectedCat(categories.find((cat) => cat.slug === params.id));
  }, [params]);

  return (
    <>
      <Header />
      <h1>Agregar nueva categoría</h1>
      <AddCategoryForm onSubmit={agregarCategoria} selectedCat={selectedCat} />

      <table border={1}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Slug</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, i) => (
            <tr key={i}>
              <td>{cat.name}</td>
              <td>{cat.slug}</td>
              <td>
                <button onClick={() => navigate(`/add-category/${cat.slug}`)}>
                  Var categoría
                </button>
                <button onClick={() => borrarCategoria(cat.name)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </>
  );
};

export { AddCategory };
