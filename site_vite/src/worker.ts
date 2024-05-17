onmessage = async (msg: MessageEvent<String>) => {
  //   debugger;
  console.log("Worker output with message:", msg.data);

  postMessage("Message from worker");
};
