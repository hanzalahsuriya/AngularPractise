import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlaygroundComponent } from "./playground/playground.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [{
  path: '', redirectTo: "/recipes", pathMatch:  "full"
}, {
  path: "recipes", component: RecipeComponent, children: [
    {
      path: ':id', component: RecipeComponent
    }
  ]
}, {
  path: "shopping-list", component: ShoppingListComponent
},{
  path: "playground", component: PlaygroundComponent
}]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}