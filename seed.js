import User from "./model/User.js";

User.clear();

User.create({
  username: "fauzan",
  email: "fauzan@email.com",
  password: "12345678",
  token: "fauzan-fauzan@email.com-12345678",
});

User.create({
  username: "hanif",
  email: "hanif@email.com",
  password: "12345678",
  token: "hanif-hanif@email.com-12345678",
});
