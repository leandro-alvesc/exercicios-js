const moduloA = require("../../moduloA");
console.log(moduloA.ola);

const pastaC = require("./pastaC");

console.log(pastaC);

const http = require("http");
http
  .createServer((req, res) => {
    res.write("Oie");
    res.end();
  })
  .listen(8080);
