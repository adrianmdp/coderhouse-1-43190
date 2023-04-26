import { useEffect, useState } from "react";
import { Button } from "./Button";

export const Radio = () => {
  const [memo, setMemo] = useState("93.3");

  const [isActive, setIsActive] = useState(false);

  const changeMemo = (value) => {
    setMemo(value);
  };

  useEffect(() => {
    console.log("Render");

    return () => {
      console.log("El componente se va a desmontar.");
    };
  }, [isActive]);

  return (
    <>
      <div>{memo}</div>

      <Button
        text={`Radio 1 ${isActive ? "esta activo" : "No esta activo"}`}
        value="97.1"
        className="btn btn-info"
        onClick={() => setIsActive(!isActive)}
        // icon={<Button text="otro button" />}
      />
      <br />
      <Button
        text="Radio 2"
        value="95.1"
        className="btn btn-dark"
        onClick={changeMemo}
      />
      <br />
      <Button
        text="Radio 3"
        value="100.1"
        className="btn btn-dark"
        onClick={changeMemo}
      />
    </>
  );
};
