import { useEffect, useState } from "react";

const AddCategoryForm = ({ onSubmit, selectedCat }) => {
  const [fields, setfields] = useState({ name: "", slug: "" });

  useEffect(() => {
    selectedCat && setfields(selectedCat);
  }, [selectedCat]);

  return (
    <form>
      <div>
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          name="name"
          value={fields.name}
          onChange={(e) =>
            setfields((prevState) => ({ ...prevState, name: e.target.value }))
          }
        />
      </div>
      <div>
        <label htmlFor="">Slug</label>
        <input
          type="text"
          name="slug"
          value={fields.slug}
          onChange={(e) =>
            setfields((prevState) => ({ ...prevState, slug: e.target.value }))
          }
        />
      </div>
      <button type="button" onClick={() => onSubmit(fields)}>
        {selectedCat ? "Actualizar categoría" : "Agregar categoría"}
      </button>
    </form>
  );
};

export { AddCategoryForm };
