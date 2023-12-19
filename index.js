import dotenv from "dotenv";
import express from "express";
import router from "./routes/index.js";
import { logger } from "./middleware/index.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on http://127.0.0.1:${port}`);
});
