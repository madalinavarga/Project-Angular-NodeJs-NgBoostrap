import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { environment } from 'src/environments/environment.development'; //?? @env/environment


@Injectable({
  providedIn: 'root'
})
export class RecipesApiService {
  baseUrl = environment.apiURL + 'recipes';

  constructor(private http: HttpClient) { }

  getAllRecipes(queryParam: string) {
    const params = { title: queryParam };
    return this.http.get<Recipe[]>(this.baseUrl, { params: params });
  }

  updateRecipe(recipe:Recipe){
    const url = `${this.baseUrl}/${recipe._id}`;
    return this.http.put<Recipe>(url,recipe);
  }
}
