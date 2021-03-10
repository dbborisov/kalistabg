import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) {

  }
  // , ref => ref.orderByChild('name')
getAll(){
  return this.db.list('/categories', ref => ref.orderByChild('order') ).snapshotChanges();
}

}
