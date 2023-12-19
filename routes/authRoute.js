import { User } from "../model/index.js";
import { ErrorResponse, LoginResponse } from "../response/index.js";
import { AuthController } from "../controller/index.js";

export default (Route) => {
  Route.post({
    description: "Login user",
    path: "/login",
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
};
