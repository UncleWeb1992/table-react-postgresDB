const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/products");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", productsRouter);

app.listen(PORT, () => {
  console.log(`server start on ${PORT}`);
});
