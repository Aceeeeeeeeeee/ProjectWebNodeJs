const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const productRouter = express.Router();

const app = express();
const PORT = 3000;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));
app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req, res) => {
  res.set("Product 1 ");
});

productRouter.route("/1").get((req, res) => {
  res.set("Product 2 ");
});

app.use("/products", productRouter);


app.get("/", (req, res) => {
  res.render("index", {
    username: "TaweeChok",
    customers: ["Tawee 1", "Tawee 2", "Tawee 3"],
  });
});
app.listen(PORT, () => {
  debug("Listening on port %d" + chalk.red(" : " + PORT));
});
