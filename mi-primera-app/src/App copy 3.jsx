import { useState } from "react";
import { Button } from "./components/Button";
import { Radio } from "./components/Radio";
import { Modal } from "./components/Modal";

const App = () => {
  const [showRadio, setShowRadio] = useState(false);

  const toggleRadio = () => {
    setShowRadio(!showRadio);
  };

  return (
    <>
      <h1>Hola mundo</h1>
      <Button
        text="Activar radio"
        className="btn btn-primary"
        onClick={toggleRadio}
      />
      <br />

      {showRadio && <Radio />}

      <Modal title="Soy un Modal" className="modal" id="modal-test">
        Este es el contenido
      </Modal>
    </>
  );
};

export default App;
