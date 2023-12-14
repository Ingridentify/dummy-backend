import dotenv from "dotenv";
import express from "express";
import User from "./model/User.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

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
        response: {
          token: "string",
        },
      },
    ],
  });
});

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  const user = User.findBy("email", email);
  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
  }

  if (user.password !== password) {
    res.status(401).json({
      message: "Wrong password",
    });
  }

  res.status(200).json({
    token: user.token,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on http://127.0.0.1:${port}`);
});
