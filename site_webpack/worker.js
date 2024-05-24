onmessage = (msg) => {
  import("wasm-sum").then((wasm) => {
    console.log("Worker is calculating with data...", msg.data);
    const sum = wasm.sum(msg.data.number1, msg.data.number2);
    postMessage(sum);
  });
};
