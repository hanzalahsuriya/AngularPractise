import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [{
        name: 'Grilled Sweet Potatoes',
        description: 'Slices of sweet potatoes grilled and slathered with a cilantro-lime dressing.',
        imagePath: 'https://www.simplyrecipes.com/thmb/IbY_MK3pA1G_ZHzWltgZCxe_OUk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg',
        ingredients: [
          new Ingredient("Spice",5),
          new Ingredient("Apple",5)
        ]
      }, {
        name: 'Pizza on toast',
        description: 'Cheese on toast meets pizza in this easy peasy cheesy recipe.',
        imagePath: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/pizza_on_toast_09337_16x9.jpg',
        ingredients: [
          new Ingredient("Vineger",5),
          new Ingredient("Zest",5)
        ]
      }];

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(idx: number) {
        return this.recipes[idx];
      }

      // recipeSeleced = new EventEmitter<Recipe>();

      addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}