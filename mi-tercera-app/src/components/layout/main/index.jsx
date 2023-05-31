import { useAuth } from "../../../hooks/auth";

const Main = ({ children }) => {
  const { userName } = useAuth();
  return (
    <main>
      {children}
      <div className="friends">
        <h3>Amigos de {userName}</h3>
      </div>
    </main>
  );
};

export { Main };
