import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html'
})

export class RecipeComponent implements OnInit {
  // selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }
  ngOnInit(): void {
    // this.recipeService.recipeSeleced
    //   .subscribe(
    //     (selectedRecipe: Recipe) => this.selectedRecipe = selectedRecipe
    //   );
  }
}