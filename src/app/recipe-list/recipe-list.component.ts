import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 'This is simply a test', 'https://myfoodbook.com.au/sites/default/files/collections_image/Easy_dinner_recipes_for%20beginners.jpg'
    ),
    new Recipe(
      'Simple Ingredient', 'Ingredient recipe you can easily make at home', 'https://cdn.lifestyleasia.com/wp-content/uploads/sites/5/2020/03/23135732/photo-1551183053-bf91a1d81141-scaled.jpeg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
