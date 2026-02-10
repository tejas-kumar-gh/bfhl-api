const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/env");
require("dotenv").config();
const bfhlRoutes = require("./routes/bfhl.routes");
const healthRoutes = require("./routes/health.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", bfhlRoutes);
app.use("/", healthRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
