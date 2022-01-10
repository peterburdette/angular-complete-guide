import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients = [];

  constructor(private shoppingList: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingList.ingredients;
  }

  onAddIngredient(ingredient: Ingredient) {
    this.shoppingList.onAddIngredient(ingredient);
  }
}
