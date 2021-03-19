import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) {

  }
  // , ref => ref.orderByChild('name')
getAll(){
 let list = this.db.list('/categories/', ref => ref.orderByChild('order') ).snapshotChanges();
  // list.pipe(map(e=>{
  //   console.log(e)
  // }))
  return list;
}

}
