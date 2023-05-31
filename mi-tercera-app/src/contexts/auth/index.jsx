import { createContext, useState } from "react";

const AuthContext = createContext({
  userName: "",
  setUserName: () => {},
});

const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState("Adrián");

  return (
    <AuthContext.Provider value={{ userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
