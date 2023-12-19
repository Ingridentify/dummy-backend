import { User } from "../model/index.js";
import { ErrorResponse, RecipeResponse } from "../response/index.js";
import { RecipeController } from "../controller/index.js";

export default (Route) => {
  Route.get({
    description: "Get user's histories",
    path: "/histories",
    callback: RecipeController.histories,
    body: {},
    query: {
      page: "number",
      limit: "number",
    },
    headers: {
      Authorization: "Bearer <token>",
    },
    responses: {
      success: RecipeResponse.create(
        User.first().history.map((history) => history.recipe)
      ),
      error: ErrorResponse.create("Unauthorized"),
    },
  });
};
