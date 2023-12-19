import Route from "./Route.js";
import { User } from "../model/index.js";
import {
  ErrorResponse,
  LoginResponse,
  RecipeResponse,
} from "../response/index.js";
import { AuthController, RecipeController } from "../controller/index.js";

Route.post({
  description: "Login user",
  path: "/auth/login",
  callback: AuthController.login,
  body: {
    email: "string",
    password: "string",
  },
  query: {},
  headers: {},
  responses: {
    success: LoginResponse.create(User.first()),
    error: ErrorResponse.create("User not found"),
  },
});

Route.get({
  description: "Get user's histories",
  path: "/histories",
  callback: RecipeController.histories,
  body: {},
  query: {
    page: "number",
    limit: "number",
  },
  headers: {
    Authorization: "Bearer <token>",
  },
  response: {
    success: RecipeResponse.create(
      User.first().history.map((history) => history.recipe)
    ),
    error: ErrorResponse.create("Unauthorized"),
  },
});

export default Route.router;
