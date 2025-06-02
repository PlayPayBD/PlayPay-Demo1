import { useState } from "react";

export default function Game() {
  const [side, setSide] = useState("");
  const [result, setResult] = useState("");

  const flipCoin = (choice) => {
    setSide(choice);
    const outcome = Math.random() < 0.5 ? "red" : "blue";
    setResult(outcome === choice ? "You Win!" : "You Lose!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🎮 Coin Flip Game</h2>
      <p>Choose a side:</p>
      <button onClick={() => flipCoin("red")}>Red 🔴</button>
      <button onClick={() => flipCoin("blue")} style={{ marginLeft: "10px" }}>
        Blue 🔵
      </button>
      {result && (
        <>
          <h3>Result: {result}</h3>
        </>
      )}
    </div>
  );
}
