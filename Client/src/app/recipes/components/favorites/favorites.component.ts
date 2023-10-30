import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { FavoritesService } from '../../services/favorites.api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public recipes: Recipe[] | null = null;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    console.log("favorites")
    this.favoritesService.getAllFavorites().subscribe({
      next: (response) => {
        this.recipes = response;
      },
      error: (err) => {
        console.error(err);
      },
    })
  }
}
