import { History } from "../model/index.js";

History.clear();

History.create({
  recipeId: 1,
  userId: 1,
});

History.create({
  recipeId: 2,
  userId: 1,
});

History.create({
  recipeId: 3,
  userId: 1,
});

History.create({
  recipeId: 2,
  userId: 2,
});

History.create({
  recipeId: 3,
  userId: 2,
});
