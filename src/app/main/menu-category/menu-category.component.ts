import { CategoryService } from './../../service/category.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.sass']
})
export class MenuCategoryComponent implements OnInit {

  categories$: any;
  @Input("category") category: string;

  constructor( categoryService: CategoryService) {

    this.categories$ = categoryService.getAll();
   }

  ngOnInit() {
  }

}
