import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    RecipeComponent,
    RecipesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
  ]
})
export class RecipesModule { }
