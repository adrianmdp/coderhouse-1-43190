import { useEffect } from "react";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <button type="submit">Enviar</button>
      </form>
      Login
      {/* <button id="myButton" onClick={login}></button> */}
    </>
  );
};

export { Login };
