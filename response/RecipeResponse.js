export default class RecipeResponse {
  static create(recipes) {
    return recipes.map((recipe) => ({
      id: recipe.id,
      name: recipe.name,
      cuisine: recipe.cuisine,
      recipes: recipe.recipes,
      imageUrl: recipe.imageUrl,
    }));
  }
}
