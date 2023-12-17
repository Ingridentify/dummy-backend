import { User } from "../model/index.js";
import { ErrorResponse, LoginResponse } from "../response/index.js";

export default class AuthController {
  static login(req, res) {
    const { email, password } = req.body;

    const user = User.findBy("email", email);
    if (!user) {
      return res.status(404).json(ErrorResponse.create("User not found"));
    }

    if (user.password !== password) {
      return res.status(401).json(ErrorResponse.create("Wrong password"));
    }

    return res.status(200).json(LoginResponse.create(user));
  }
}
