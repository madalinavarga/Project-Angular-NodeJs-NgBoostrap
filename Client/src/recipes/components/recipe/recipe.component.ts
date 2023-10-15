import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/recipes/models/recipe';
import { recipesData } from '../mock';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: []
})
export class RecipeComponent implements OnInit {
  public recipes: Recipe[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log("intru aici");
    this.recipes = recipesData;
  }

}
