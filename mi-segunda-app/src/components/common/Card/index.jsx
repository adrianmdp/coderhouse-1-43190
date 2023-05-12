const styles = {
  border: "1px solid #AAA",
  padding: 15,
  borderRadius: 5,
  margin: 10,
};

const Card = ({
  children,
  title,
  description,
  category,
  asignedUser,
  owner,
  onUserClickCard,
}) => {
  return (
    <div style={styles} onClick={() => onUserClickCard("Hola mundo")}>
      {children}
      {/* <ul>
        <li>Título: {title}</li>
        <li>Descripción: {description}</li>
        <li>Categoría: {category}</li>
        <li>Responsable: {asignedUser}</li>
        <li>Autor: {owner}</li>
      </ul> */}
    </div>
  );
};

export { Card };
