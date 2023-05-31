import { useContext } from "react";
import { AuthContext } from "../../contexts";

const useAuth = () => {
  const { userName, setUserName } = useContext(AuthContext);

  const updateProfileImage = () => {};

  const updateUserName = () => {};

  const login = () => {
    // Acá resolvemos el Login
    // y luego
    setUserName("Pepe");
  };

  const logout = () => {};

  return { userName, updateUserName, updateProfileImage, login, logout };
};

export { useAuth };
