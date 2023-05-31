import { useAuth } from "../../hooks/auth";

const Login = () => {
  const { login } = useAuth();

  const iniciarSesion = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <form onSubmit={iniciarSesion}>
      <input type="text" />
      <input type="text" />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export { Login };
