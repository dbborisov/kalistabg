import { ProductsService } from '../../service/products.service';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent implements OnInit{

  products: any[];
  filteredProducts: any[];
  subscribtion: Subscription;

  constructor(private productService: ProductsService) {

    this.subscribtion = productService.getAll()
    .subscribe(products =>this.filteredProducts =  this.products = products);

   }

  ngOnInit() {

  }

  filter(search:string){

    this.filteredProducts = (search) ?
     this.products.filter(p => {

      return p.$value.title.toLowerCase().includes(search.toLowerCase())
      }) :
     this.products;
     console.log(this.filteredProducts)
  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe;
  }

}
