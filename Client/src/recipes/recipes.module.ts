import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    RecipeComponent,
    RecipesComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    HttpClientModule
  ]
})
export class RecipesModule { }
