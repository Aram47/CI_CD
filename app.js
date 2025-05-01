import express from "express";
import cors from "cors";
import { connectDB, configEnv } from "./config/index.js";
import router from "./router/router.js";

configEnv();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Server is running on ${process.env.HOST}:${process.env.PORT}`);
});

