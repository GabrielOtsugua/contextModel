import { useContext } from "react";
import "./App.css";
import { Context } from "./contexts/Context";

export function App() {
  const { changeColor, color } = useContext(Context);
  console.log(color);

  return (
    <div>
      <span>
        <button onClick={() => changeColor("yellow")}>AMARELO</button>
        <button onClick={() => changeColor("green")}>VERDE</button>
        <button onClick={() => changeColor("blue")}>AZUL</button>
      </span>

      <input disabled style={{ backgroundColor: color }} />
    </div>
  );
}
