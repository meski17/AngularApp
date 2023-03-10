import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingreadiant.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor() {
    new Ingredient('Apples', 5);
    new Ingredient('Tomatoes', 10);
  }

  ngOnInit(): void {
  }

}
