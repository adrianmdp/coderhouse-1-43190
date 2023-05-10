import { withAuth } from "../../hocs/withAuth";
import { useAuth } from "./";

const LoginPage = (props) => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const { user, login } = useAuth("", 1123);

  render(
    <div>
      {user ? `Hola ${user.name}` : "No hay una sesión iniciada"}
      <form action="">
        <input type="text" name="user" />

        <input type="text" name="pass" />

        <button type="submit" onClick={() => login(email, pass)}>
          Iniciar sesión
        </button>
      </form>

      <Modal>
        <div></div>
      </Modal>
    </div>
  );
};

export const Login = withAuth(LoginPage);
