import { User } from "../model/index.js";

User.clear();

User.create({
  name: "Fauzan",
  email: "fauzan@email.com",
  password: "12345678",
  token: generateToken(64),
});

User.create({
  name: "Hanif",
  email: "hanif@email.com",
  password: "12345678",
  token: generateToken(64),
});

function generateToken(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
