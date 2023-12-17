import { User } from "../model/index.js";
import { ErrorResponse, RecipeResponse } from "../response/index.js";

export default class RecipeController {
  static histories(req, res) {
    const token = req.headers.authorization.split(" ")[1];
    const user = User.findBy("token", token);
    if (!user) {
      return res.status(401).json(ErrorResponse.create("Unauthorized"));
    }

    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    const histories = user.history.slice((page - 1) * limit, page * limit);

    return res
      .status(200)
      .json(RecipeResponse.create(histories.map((history) => history.recipe)));
  }
}
