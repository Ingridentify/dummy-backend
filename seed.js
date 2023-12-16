import User from "./model/User.js";

User.clear();

User.create({
  name: "Fauzan",
  username: "fauzan",
  email: "fauzan@email.com",
  password: "12345678",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
});

User.create({
  name: "Hanif",
  username: "hanif",
  email: "hanif@email.com",
  password: "12345678",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
});
