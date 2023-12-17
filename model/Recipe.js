import { Model, Field } from "json-modelizer";

export default class Recipe extends Model {
  static _table = "recipes";
  static schema = {
    name: Field.String,
    cuisine: Field.String,
    recipes: Field.String,
    imageUrl: Field.String,
  };
}
