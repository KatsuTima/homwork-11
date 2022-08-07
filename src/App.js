import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef("green");

  useEffect(() => {
    const curentDiv = ref.current.style;
    const timerColor = setInterval(() => {
      curentDiv.background === "green"
        ? (curentDiv.background = "red")
        : (curentDiv.background = "green");
    }, 1000);
    return () => clearInterval(timerColor);
  }, []);

  return (
    <div class="block" ref={ref}>
      <h1>Градиент!</h1>
      <p>
        Градие́нт — вектор, своим направлением указывающий направление
        наибольшего возрастания некоторой скалярной величины \varphi, а по
        величине равный скорости роста этой величины в этом направлении.
      </p>
    </div>
  );
}

export default App;
