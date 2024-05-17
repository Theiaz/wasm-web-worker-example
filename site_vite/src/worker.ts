import * as wasm from "wasm-sum";

onmessage = (msg: MessageEvent<{ number1: number; number2: number }>) => {
  console.log("Worker is calculating with data...", msg.data);

  debugger;
  const sum = wasm.sum(1, 2);
  debugger;

  postMessage(3);
};
