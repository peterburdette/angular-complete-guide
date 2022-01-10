import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  // the 'Recipe[]' indicates that we are using our model which contains the types of properties that will be used within this array.
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test recipe',
      'https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is another test recipe',
      'https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
    ),
  ];

  getRecipes() {
    // 'slice()' will cause this method to return a copy of the recipies array
    return this.recipes.slice();
  }
}
