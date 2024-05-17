// this import is working!
// import * as wasm from "wasm-sum";
// const sum = wasm.sum(1, 2);
// console.log("Sum is: ", sum);


if (window.Worker) {
  const myWorker = new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module",
  });

  myWorker.postMessage({ number1: 1, number2: 2 });
  console.log("Message posted to worker with numbers 1 and 2.");

  myWorker.onmessage = (e: MessageEvent<number>) => {
    console.log("Message received, sum is: ", e.data);
  };
} else {
  console.log("Your browser doesn't support web workers.");
}
export {};
