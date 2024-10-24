import express from "express";
import add from "@scope/basic-math/addition";

const app = express();

app.get('/', function (_req, res) {
  res.send((add(10, 11)).toString());
});

export function startServer() {
  console.log("Starting server at http://127.0.0.1:3000");
  app.listen(3000);
}