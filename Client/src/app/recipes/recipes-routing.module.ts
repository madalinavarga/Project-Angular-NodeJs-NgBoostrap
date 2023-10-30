import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { SidetoggleComponent } from './components/sidetoggle/sidetoggle.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
  {
    path: "favorites", component: FavoritesComponent
  },
  {
    path: ":id", component: SidetoggleComponent
  },
  {
    path: "", component: RecipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
