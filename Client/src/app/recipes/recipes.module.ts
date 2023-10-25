import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchComponent } from './components/search/search.component';
import { SidetoggleComponent } from './components/sidetoggle/sidetoggle.component';


@NgModule({
  declarations: [
    RecipeComponent,
    RecipesComponent,
    SearchComponent,
    SidetoggleComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
  ]
})
export class RecipesModule { }
