import { useState } from "react";
import "./styles.css";

const arr = ["Hello! I am a piece of text.", "Don't underestimate me."];

export default function App() {
  const [texts, setTexts] = useState(arr);
  return (
    <div className="App">
      {texts.map((text) => (
        <p>{text}</p>
      ))}
      <button onClick={() => setTexts([...texts, "You don't know me!."])}>
        Add
      </button>
    </div>
  );
}
