const connectToMongo = require("./db");
connectToMongo();
const product = require("./routes/productRoute");
const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());
//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/roomdesc", require("./routes/roomdesc"));
// app.use("/api/v1", product);
app.use("/api/products", require("./routes/products"));

app.listen(port, () => {
  console.log(`House-Rent backend running at http://localhost:${port}`);
});