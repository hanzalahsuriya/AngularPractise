import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/Ingredient.model";

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient("spice",5),
        // new Ingredient("water", 10)
      ];

      // ingredientChanged = new EventEmitter<Ingredient[]>();

      ingredientChanged = new Subject<Ingredient[]>();

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice());
      }

      getIngredients ():  Ingredient[] {
          return this.ingredients.slice();
      }

      addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        // this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice());
      }
}