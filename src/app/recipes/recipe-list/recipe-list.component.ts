import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'A classic Wiener schnitzel from pork or turkey', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPecgykAQuDUOKgMfpMp4BsA98Rfr_ELigAA&usqp=CAU')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
