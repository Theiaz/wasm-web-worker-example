import * as wasm from "wasm-sum";

onmessage = (msg) => {
  console.log("Worker is calculating with data...", msg.data);

  debugger;
  const sum = wasm.sum(1, 2);
  debugger;

  postMessage(sum);
};
