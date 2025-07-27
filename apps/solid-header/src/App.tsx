import { createSignal } from "solid-js";
import "./App.css";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <header>
      sono l'header
      <button onClick={() => setCount((prev) => prev + 1)}>{count()}</button>
    </header>
  );
}

export default App;
