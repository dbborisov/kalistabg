import { ProductsService } from '../../service/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CategoryService } from 'src/app/service/category.service';
import { ProductInt } from 'src/app/models/interfaces';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class AdminMenuComponent implements OnInit {
  categories$;
  product:ProductInt = {
    title : "",
    price : 0,
    category : "",
    imageUrl: ""
  };
  id: string;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductsService,
    private route: ActivatedRoute) {

    this.categories$ = this.categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.productService.getById(this.id).valueChanges().pipe(take(1)).subscribe(p => {
        this.product = p as ProductInt;
      });
    }


  }

  ngOnInit() {

  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, product)
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/menu']);
  }

  delete(){
    if(confirm("Искателе ли да изтриете продукта")){
        this.productService.delete(this.id);
        this.router.navigate(['/admin/menu']);
    }
  }

}


