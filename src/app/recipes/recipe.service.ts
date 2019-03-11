import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://www.merchantsmarket.com/wp-content/uploads/2018/04/recipe-icon-300x300.png"
    ),
    new Recipe(
      "Another Test Recipe",
      "This is simply a test",
      "https://www.merchantsmarket.com/wp-content/uploads/2018/04/recipe-icon-300x300.png"
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
