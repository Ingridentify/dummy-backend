import dotenv from "dotenv";
import express from "express";
import { User } from "./model/index.js";
import {
  ErrorResponse,
  LoginResponse,
  RecipeResponse,
} from "./response/index.js";
import { AuthController, RecipeController } from "./controller/index.js";
import { logger } from "./middleware/index.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.get("/", (req, res) => {
  console.log(User.first().history);
  res.json({
    message: "Hello world!",
    endpoints: [
      {
        path: "/auth/login",
        method: "POST",
        description: "Login user",
        body: {
          email: "string",
          password: "string",
        },
        successResponse: LoginResponse.create(User.first()),
        errorResponse: ErrorResponse.create("User not found"),
      },
      {
        path: "/histories",
        method: "GET",
        description: "Get user's histories",
        query: {
          page: "number",
          limit: "number",
        },
        headers: {
          Authorization: "Bearer <token>",
        },
        successResponse: RecipeResponse.create(
          User.first().history.map((history) => history.recipe)
        ),
        errorResponse: ErrorResponse.create("Unauthorized"),
      },
    ],
  });
});

app.post("/auth/login", AuthController.login);
app.get("/histories", RecipeController.histories);

app.listen(port, () => {
  console.log(`Example app listening on http://127.0.0.1:${port}`);
});
