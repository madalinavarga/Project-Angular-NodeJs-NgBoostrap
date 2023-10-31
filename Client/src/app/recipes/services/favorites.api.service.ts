import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Recipe } from '../models/recipe';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  baseUrl = environment.apiURL + 'favorites';
  constructor(private httpClient: HttpClient) { }

  getAllFavorites() {
    return this.httpClient.get<Recipe[]>(this.baseUrl);
  }

  addFavorite(id:string){
    const httpParams = new HttpParams().set('recipeId', id);
    return this.httpClient.post(this.baseUrl, {},{ params: httpParams });
  }

  removeFavorite(id:string){
    const params = {'recipeId': id}
    return this.httpClient.delete(this.baseUrl, {params});
  }

  getFavoriteById(id:string){
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get(url);
  }
}
