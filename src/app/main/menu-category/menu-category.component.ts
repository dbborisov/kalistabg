import { async } from '@angular/core/testing';
import { CategoryService } from './../../service/category.service';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss']
})
export class MenuCategoryComponent implements OnInit {

  categories$: any;
  @Input("category") category: string;
  @Input("drawer") drawer;

  constructor( categoryService: CategoryService) {

    this.categories$ =categoryService.getAll();
   }

  ngOnInit() {
  }

}
