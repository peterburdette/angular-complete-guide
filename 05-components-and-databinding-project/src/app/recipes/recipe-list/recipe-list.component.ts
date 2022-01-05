import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // <Recipe> is the type that is being passed
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // the 'Recipe[]' indicates that we are using our model which contains the types of properties that will be used within this array.
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    // console.log(recipe);
  }
}
