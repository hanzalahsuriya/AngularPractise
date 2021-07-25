import { Route } from '@angular/compiler/src/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private router: Router, private activeRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    // const id = this.activeRoute.snapshot.params['id'];
    
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }

  addIngredientToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
}
