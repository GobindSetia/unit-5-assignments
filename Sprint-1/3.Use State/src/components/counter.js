import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncDec = (value) => {
    if (value == 1 || value == -1) {
      setCounter(counter + value);
    }
    if (value == 2) {
      setCounter(counter * 2);
    }
  };
  return (
    <div>
      <h3>Counter:{counter}</h3>
      <button onClick={() => handleIncDec(1)}>Increment</button>
      <button onClick={() => handleIncDec(-1)}>Decrement</button>
      <button onClick={() => handleIncDec(2)}>Double</button>
    </div>
  );
}
