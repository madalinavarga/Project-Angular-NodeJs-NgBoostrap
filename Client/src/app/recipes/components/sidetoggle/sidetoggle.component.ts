import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipesComunicationService } from '../../services/recipes-comunication.service';
import { Subscription } from 'rxjs';
import { FavoritesService } from '../../services/favorites.api.service';
import { Router } from '@angular/router';
import { faStar as fullStar, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { RecipesApiService } from '../../services/recipes.api.service';

@Component({
  selector: 'app-sidetoggle',
  templateUrl: './sidetoggle.component.html',
  styleUrls: ['./sidetoggle.component.css']
})
export class SidetoggleComponent implements OnInit, OnDestroy {
  public isOpen: boolean = false;
  public recipe: Recipe | null = null;
  public modiefiedRecipe: Recipe | null = null;
  public isFavorite: boolean = false;
  public faStar = fullStar;
  public emptyStar = emptyStar;
  public faEdit = faEdit;
  public isEditMode = false;

  private subscription: Subscription | null = null;

  constructor(private recipesComunicationService: RecipesComunicationService, private favoriteService: FavoritesService, private router: Router, private serviceRecipes: RecipesApiService) { }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.recipesComunicationService.isSideToggleOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });

    this.recipesComunicationService.currentRecipe$.subscribe(recipe => {
      this.recipe = recipe!;
      this.modiefiedRecipe = recipe!;
      if (this.isOpen) {
        this.favoriteService.getFavoriteById(this.recipe?._id!).subscribe({
          next: (response) => {
            if (response == true) {
              this.isFavorite = true;
            }
          },
          error: (err) => {
            this.isFavorite = false;
            console.error("err", err)
          }
        })
      }
    })

    this.modiefiedRecipe = this.recipe;
  }

  closeSideToggle() {
    this.recipesComunicationService.changeOpenSideToggle(false)
  }

  formatText(text?: string): string | undefined {
    return text?.replace(/\n/g, '<br>');
  }

  handleFavorites(stateFavorite: boolean, id?: string) {
    this.isFavorite = stateFavorite
    if (stateFavorite) {
      this.favoriteService.addFavorite(id!)
        .subscribe({
          next: () => {
          },
          error: (err) => {
            console.error(err);
          },
        })
    } else {
      this.favoriteService.removeFavorite(id!).subscribe({
        next: () => { },
        error: (err) => {
          console.log(err)
        }
      })
    }
    // this.router.navigate(['favorites']);
  }

  handleEditRecipe(id?: string) {
    this.isEditMode = true;
  }

  handleCancel() {
    this.isEditMode = false;
  }

  updateInput(recipeField: any, inputType: string) {
    const newValue = recipeField.target.value;

    switch (inputType) {
      case 'duration':
        this.modiefiedRecipe!.duration = newValue;
        break;
      case 'ingredients':
        this.modiefiedRecipe!.ingredients = newValue;
        break;
      case 'preparation':
        this.modiefiedRecipe!.preparation = newValue;
        break;
      case 'title':
        this.modiefiedRecipe!.title = newValue;
        break;
      default:
        console.warn(`Unknown input type: ${inputType}`);
    }
  }

  handleUpdateRecipe() {
    this.serviceRecipes.updateRecipe(this.modiefiedRecipe!).subscribe({
      next: (response) => {
        this.recipe = response;
      },
      error: (err) => {
        console.error(err);
      },
    })

    this.isEditMode = false;
  }
}
