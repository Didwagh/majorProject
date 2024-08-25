const express = require("express");
const connectToMongoDB = require("./ConnectToMongo");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.js");
const cors = require("cors");

const coreStatus = {
  origin: "http://localhost:8081",
  optionsSuccessStatus: 200,
};

dotenv.config();
const app = express();
const port = 2525;

app.use(cors(coreStatus));
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

connectToMongoDB();
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
