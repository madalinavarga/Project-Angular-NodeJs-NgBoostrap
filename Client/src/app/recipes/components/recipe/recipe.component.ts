import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/models/recipe';
import { RecipesComunicationService } from '../../services/recipes-comunication.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: []
})
export class RecipeComponent implements OnInit {
  @Input()
  public recipe: Recipe | null = null;
  
  constructor(private _recipesComunicationService: RecipesComunicationService) { }

  ngOnInit(): void {

  }

  openRecipe(recipe?:Recipe){
    this._recipesComunicationService.changeOpenSideToggle(true);
    if(recipe !==null){
      this._recipesComunicationService.setSelectedRecipe(recipe!);
    }
  }

}
