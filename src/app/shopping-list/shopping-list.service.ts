import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService
{
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Pasta', 100),
    new Ingredient('Tomato', 1)
  ];

  getIngredients()
  {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient)
  {
    this.ingredients.push(ingredient);
    this.emitIngredients();
  }

  addIngredients(ingredients: Ingredient[])
  {
    this.ingredients.push(...ingredients);
    this.emitIngredients();
  }

  private emitIngredients()
  {
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
