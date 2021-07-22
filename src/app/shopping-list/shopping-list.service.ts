import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient("spice",5),
        // new Ingredient("water", 10)
      ];

      ingredientChanged = new EventEmitter<Ingredient[]>();

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
      }

      getIngredients ():  Ingredient[] {
          return this.ingredients.slice();
      }

      addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
      }
}