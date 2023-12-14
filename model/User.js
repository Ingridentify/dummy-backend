import { Model, Field } from "json-modelizer";

class User extends Model {
  static _table = "users";
  static schema = {
    username: Field.String,
    email: Field.String,
    password: Field.String,
    token: Field.String,
  };
}

export default User;
