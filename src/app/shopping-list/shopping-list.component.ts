import { Component } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("spice",5),
    new Ingredient("water", 10)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}