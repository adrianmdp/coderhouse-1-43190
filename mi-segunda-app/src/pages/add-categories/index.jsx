import { Card } from "../../components/common";

const AddCategory = () => {
  return (
    <>
      Agregar categoría
      <Card
        onUserClickCard={(saludo) => {
          console.log("Borrar categoría música", saludo);
        }}
      >
        Música
      </Card>
      <Card
        onUserClickCard={() => {
          console.log("Borrar categoría deportes");
        }}
      >
        Deportes
      </Card>
    </>
  );
};

export { AddCategory };
