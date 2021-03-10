import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  // private getShoppingCart(cartId: string) {
  //   return this.db.object('/shopping-carts/' + cartId);
  // }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem("cartId");
    if (cartId) {
      return cartId;
    }
    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  getItem(cartId: string, productId: string) {
    let result = this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    console.log("in get id : ", result)
    return result;
  }

  async addToCart(product) {

    let cartId = await this.getOrCreateCartId();
    console.log(product);
    let item$ = this.getItem(cartId, product.$key);
    console.log(item$)
    item$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {
      console.log(item);
      if (item.payload.val()) {
        item$.update({ product: product.$value, quantity: item.payload.val().quantity + 1 });
      } else {
        item$.set({ product: product.$value, quantity: 1 });
      }

    })

  }
}
