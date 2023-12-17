import User from "./User.js";
import Recipe from "./Recipe.js";
import History from "./History.js";

Recipe.hasMany(History);
History.belongsTo(User).as("user");

User.hasMany(History);
History.belongsTo(Recipe).as("recipe");

export { User, Recipe, History };
