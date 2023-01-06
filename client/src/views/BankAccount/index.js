import React, { useState, useRef } from "react";

const BankAccount = () => {
  const [count, setCount] = useState(60);

  let timerId = useRef();
  console.log(timerId.current);

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    console.log("Start->", timerId.current);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("Stop->", timerId.current);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default BankAccount;
