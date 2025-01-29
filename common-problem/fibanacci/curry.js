let promise1 = Promise.resolve(3);
let promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));
let promise3 = new Promise((resolve) => setTimeout(resolve, 200, 'bar'));

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [3, "foo", "bar"]
  })
  .catch((error) => {
    console.log("One of the promises failed", error);
  });