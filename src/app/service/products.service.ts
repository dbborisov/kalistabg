import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private db: AngularFireDatabase) { }
  create(product){
    return this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products')
    .snapshotChanges()
    .pipe(map(changes => changes.map(c => ({
      $key: c.payload.val(), $value: c.payload.val()
    }))));
  }

  getById(productId){
    let res = this.db.object('/products/'+productId);

    return res ;
  }

  update(productId,product){
    return this.db.object('/products/'+productId).update(product);
  }

  delete(productId){
    return this.db.object('/products/'+productId).remove();
  }
}
