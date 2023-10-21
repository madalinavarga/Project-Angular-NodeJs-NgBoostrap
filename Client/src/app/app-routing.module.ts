import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'recipes', loadChildren: () => import("./recipes/recipes.module").then(m => m.RecipesModule)
  },
  {
    path: 'contact', loadChildren: ()=> import("./contact/contact.module").then(m=>m.ContactModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: '/recipes'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
