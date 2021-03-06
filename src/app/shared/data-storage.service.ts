
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";
import { pipe } from 'rxjs';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put("https://recipe-book-ng-marius.firebaseio.com/recipes.json", this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get("https://recipe-book-ng-marius.firebaseio.com/recipes.json")
      .pipe(map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {

          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
