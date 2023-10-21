import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipesComunicationService } from '../../services/recipes-comunication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidetoggle',
  templateUrl: './sidetoggle.component.html',
  styleUrls: ['./sidetoggle.component.css']
})
export class SidetoggleComponent implements OnInit, OnDestroy {
  public isOpen: boolean = true;
  public recipe: Recipe | null = null;
  public isFavorite: boolean =false;

  private subscription: Subscription | null = null;

  constructor(private recipesComunicationService: RecipesComunicationService) { }

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
      console.log(recipe?.preparation)
      this.recipe = recipe!;
    })
  }

  closeSideToggle() {
    this.recipesComunicationService.changeOpenSideToggle(false)
  }

  formatText(text?: string): string | undefined {
    return text?.replace(/\n/g, '<br>');
  }

  handleFavorites(stateFavorite:boolean){
    this.isFavorite = stateFavorite
  }
}
