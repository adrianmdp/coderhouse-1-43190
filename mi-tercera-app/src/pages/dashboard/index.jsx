import { Container } from "react-bootstrap";
import { Layout } from "../../components";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts";

const Dashboard = () => {
  const { userName } = useContext(AuthContext);

  const [showAside, setShowAside] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Container>
      <Layout hideAside={!showAside} />

      <button onClick={() => setShowAside((prevState) => !prevState)}>
        {showAside ? "Ocultar Aside" : "Mostrar Aside"}
      </button>

      <div>
        <ul>
          <li>Ver perfíl</li>
          {isAdmin ? (
            <li>Eliminar usuarios</li>
          ) : (
            <li>Ver reporte de usuario</li>
          )}
        </ul>
      </div>
    </Container>
  );
};

export { Dashboard };
