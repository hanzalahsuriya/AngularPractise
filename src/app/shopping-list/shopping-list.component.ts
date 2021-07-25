import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]; 
  private ingredientsSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }
  ngOnDestroy(): void {
    this.ingredientsSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsSubscription =
      this.shoppingListService.ingredientChanged.subscribe(
        (ingredients) => this.ingredients = ingredients
      );
  }
  
  // addIngredient(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }
}