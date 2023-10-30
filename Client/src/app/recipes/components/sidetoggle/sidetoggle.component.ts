import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipesComunicationService } from '../../services/recipes-comunication.service';
import { Subscription } from 'rxjs';
import { FavoritesService } from '../../services/favorites.api.service';
import { Router } from '@angular/router';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-sidetoggle',
  templateUrl: './sidetoggle.component.html',
  styleUrls: ['./sidetoggle.component.css']
})
export class SidetoggleComponent implements OnInit, OnDestroy {
  public isOpen: boolean = false;
  public recipe: Recipe | null = null;
  public isFavorite: boolean = false;
  public faStar = fullStar;
  public emptyStar = emptyStar;

  private subscription: Subscription | null = null;

  constructor(private recipesComunicationService: RecipesComunicationService, private favoriteService: FavoritesService, private router: Router) { }

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
            console.log("added")
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
}
