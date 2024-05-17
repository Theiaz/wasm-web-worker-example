if (window.Worker) {
  const myWorker = new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module",
  });

  myWorker.postMessage("Start");
  console.log("Message posted to worker");

  myWorker.onmessage = (e: MessageEvent<String>) => {
    console.log("Message received from worker", e.data);
  };
} else {
  console.log("Your browser doesn't support web workers.");
}
export {};
