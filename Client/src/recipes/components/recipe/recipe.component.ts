import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/recipes/models/recipe';
import { recipesData } from '../mock';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: []
})
export class RecipeComponent implements OnInit {
  @Input()
  public recipe: Recipe | null = null;
  
  constructor() { }

  ngOnInit(): void {

  }

}
