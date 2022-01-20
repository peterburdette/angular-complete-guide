import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // gets the route parameter id
    const id = this.route.params.subscribe((params: Params) => {
      // stores the param id inside of the 'id' property as a number
      this.id = +params['id'];
      // passes the 'id' into the getRecipe() method which is inside of the recipeService
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    console.log(this.recipe.ingredients);
    console.log('working');
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
