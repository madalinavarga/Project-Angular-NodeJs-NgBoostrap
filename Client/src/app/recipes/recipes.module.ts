import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchComponent } from './components/search/search.component';
import { SidetoggleComponent } from './components/sidetoggle/sidetoggle.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    RecipeComponent,
    RecipesComponent,
    SearchComponent,
    SidetoggleComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    FontAwesomeModule
  ]
})
export class RecipesModule { }
