//Use Promise ...asynchronous operation and its resulting value.A Promise is in one of these states
const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log(num);
  if (num < 5) {
    resolve(10000);
  } else {
    reject("no data available");
  }
});
//error handling 
getData
  .then((data) => console.log(data))
  .catch((err) => console.error("ERR :", err));
