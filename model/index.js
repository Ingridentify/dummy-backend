import User from "./User.js";
import Recipe from "./Recipe.js";
import History from "./History.js";

Recipe.hasMany(History).foreignKey("recipeId");
History.belongsTo(Recipe).as("recipe");

User.hasMany(History).foreignKey("userId");
History.belongsTo(User).as("user");

export { User, Recipe, History };
