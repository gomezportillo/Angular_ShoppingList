import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit
{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("spaghetti", "Yummy", "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Spaghetti-Pic__Photocredit-David-Loftus-LEDE.jpg"),
    new Recipe("pizza", "Yummier", "https://i.blogs.es/40c9b7/pizza-casera-champinon/840_560.jpg"),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }

}
