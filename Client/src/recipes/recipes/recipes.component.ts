import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipesApiService } from '../services/recipes.api.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: []
})
export class RecipesComponent implements OnInit {
  public recipes: Recipe[] = [];
  public filterRecipes: string = "";

  constructor(private recipeService: RecipesApiService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  handleFilterChange(value: string) {
    this.filterRecipes=value;
    console.log("Ai schimbat valoarea!", value, "filtru",this.filterRecipes);
    this.getAll();
  }

  getAll() {
    this.recipeService.getAllRecipes(this.filterRecipes).subscribe({
      next: (response) => {
        this.recipes = response;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }



}
