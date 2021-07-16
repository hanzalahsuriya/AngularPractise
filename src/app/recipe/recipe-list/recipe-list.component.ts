import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() onSelectRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [{
    name: 'Grilled Sweet Potatoes',
    description: 'Slices of sweet potatoes grilled and slathered with a cilantro-lime dressing.',
    imagePath: 'https://www.simplyrecipes.com/thmb/IbY_MK3pA1G_ZHzWltgZCxe_OUk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg'
  }, {
    name: 'Pizza on toast',
    description: 'Cheese on toast meets pizza in this easy peasy cheesy recipe.',
    imagePath: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/pizza_on_toast_09337_16x9.jpg'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  selectRecipe(selectedRecipe: Recipe) {
    this.onSelectRecipe.emit(selectedRecipe);
  }

}
