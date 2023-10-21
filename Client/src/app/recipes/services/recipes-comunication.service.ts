import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesComunicationService {
  private _isSideToggleOpen = new BehaviorSubject<boolean>(false);
  private _currentRecipe = new BehaviorSubject<Recipe | null>(null);

  // Expose the subjects as observables directly
  get isSideToggleOpen$(): Observable<boolean> {
    return this._isSideToggleOpen.asObservable();
  }

  get currentRecipe$(): Observable<Recipe | null> {
    return this._currentRecipe.asObservable();
  }


  constructor() { }

  changeOpenSideToggle(isOpen: boolean) {
    this._isSideToggleOpen.next(isOpen)
    console.log(this._isSideToggleOpen)
  }

  setSelectedRecipe(recipe:Recipe){
    this._currentRecipe.next(recipe);
  }
}
