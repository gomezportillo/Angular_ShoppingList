import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService
{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("spaghetti",
               "Yummy",
               "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Spaghetti-Pic__Photocredit-David-Loftus-LEDE.jpg",
               [
                 new Ingredient("Pasta", 100),
                 new Ingredient("Tomato", 2),
               ]),

    new Recipe("pizza",
               "Yummier",
               "https://i.blogs.es/40c9b7/pizza-casera-champinon/840_560.jpg",
               [
                 new Ingredient("dought", 1),
                 new Ingredient("cheese", 100),
               ]),
  ];

  constructor(private slService: ShoppingListService) {}


  getRecipes()
  {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[])
  {
    this.slService.addIngredients(ingredients);
  }
}
