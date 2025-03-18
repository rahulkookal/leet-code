

async function abc() {
    setTimeout(() => console.log("Timeout fired"), 1000);
   
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Await completed");
   
    setImmediate(() => console.log("Immediate fired"));
  }