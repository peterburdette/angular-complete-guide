import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  // this is similar to react where useRef is getting the value of the input field and assigning it to a variable
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  // the type definition of the ingredient to be added uses the Ingredient model
  // 'ingredientAdded' is what the parent component is binding to
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingList: ShoppingListService) {}

  ngOnInit(): void {}

  addIngredient() {
    // retrieves the name and amount values
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;

    // stores the name and amount inside of the variable 'newIngredient'
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);

    // passes the 'newIngredient' variable so that it can be accessed outside of the component
    this.ingredientAdded.emit(newIngredient);
    this.shoppingList.addIngredient(newIngredient);
  }
}
