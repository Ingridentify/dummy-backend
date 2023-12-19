import Route from "./Route.js";

import initAuthRoute from "./authRoute.js";
import initRecipeRoute from "./recipeRoute.js";

initAuthRoute(Route);
initRecipeRoute(Route);

export default Route.router;
