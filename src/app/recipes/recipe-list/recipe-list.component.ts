import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("spaghetti", "Yummy", "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Spaghetti-Pic__Photocredit-David-Loftus-LEDE.jpg"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
