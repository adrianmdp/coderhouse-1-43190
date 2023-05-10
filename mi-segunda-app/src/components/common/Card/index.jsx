const Card = ({ title, description, category, asignedUser, owner }) => {
  return (
    <div
      style={{
        border: "1px solid #AAA",
        padding: 15,
        borderRadius: 5,
        margin: 10,
      }}
    >
      <ul>
        <li>Título: {title}</li>
        <li>Descripción: {description}</li>
        <li>Categoría: {category}</li>
        <li>Responsable: {asignedUser}</li>
        <li>Autor: {owner}</li>
      </ul>
    </div>
  );
};

export { Card };
