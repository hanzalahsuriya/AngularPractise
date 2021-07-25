import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  constructor(recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
    this.recipes = recipeService.getRecipes();
  }

  ngOnInit(): void {
  }

  onNewRecipe() {
    // this.router.navigate(['/recipes/new']);
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
