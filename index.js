import dotenv from "dotenv";
import express from "express";
import User from "./model/User.js";
import LoginResponse from "./response/LoginResponse.js";
import ErrorResponse from "./response/ErrorResponse.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
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
    ],
  });
});

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  const user = User.findBy("email", email);
  if (!user) {
    return res.status(404).json(ErrorResponse.create("User not found"));
  }

  if (user.password !== password) {
    return res.status(401).json(ErrorResponse.create("Wrong password"));
  }

  return res.status(200).json(LoginResponse.create(user));
});

app.listen(port, () => {
  console.log(`Example app listening on http://127.0.0.1:${port}`);
});
