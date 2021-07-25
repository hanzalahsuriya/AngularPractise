import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlaygroundComponent } from "./playground/playground.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipe/recipe-start.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [{
  path: '', redirectTo: "/recipes", pathMatch: "full"
}, {
  path: "recipes", component: RecipeComponent, children: [{
    path: 'new', component: RecipeEditComponent
  }, {
    path: '', component: RecipeStartComponent
  }, {
    path: ':id', component: RecipeDetailComponent
  }, {
    path: ':id/edit', component: RecipeEditComponent
  }]
}, {
  path: "shopping-list", component: ShoppingListComponent
}, {
  path: "playground", component: PlaygroundComponent
}]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}