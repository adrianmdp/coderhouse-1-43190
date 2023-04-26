import { Button } from "./components/Button";

const primary = "#123456";

function App() {
  console.log("Hola mundo");

  const styles = {
    backgroundColor: primary,
    color: "white",
    fontSize: 10,
  };

  const miFuncion = () => {
    console.log("click al button");
  };

  return (
    <div className="app">
      <header style={styles}>
        <h1>Mi primera app</h1>
      </header>
      <p>Hola mundo</p>
      <img src="" alt="" />
      <span>Hola</span>
      <Button
        id="contact-button"
        className="btn btn-primary"
        text="Enviar"
        style={{ backgroundColor: "red" }}
        type="button"
        onClick={miFuncion}
      />
      <Button
        id="signup-button"
        className="btn btn-secondary"
        text="Crear cuenta"
        style={{ backgroundColor: "green" }}
        type="submit"
        onClick={() => {
          console.log("click al button singup");
        }}
      />
    </div>
  );
}

export default App;
