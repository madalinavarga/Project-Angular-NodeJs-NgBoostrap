import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { SidetoggleComponent } from './components/sidetoggle/sidetoggle.component';

const routes: Routes = [
  {
    path: "", component: RecipesComponent
  },
  {
    path: ":id", component: SidetoggleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
