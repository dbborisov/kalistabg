import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute , Router} from '@angular/router';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { map,switchMap } from 'rxjs/operators';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<firebase.User> ;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
     private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
   }


  login(){
    let url:string = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',url)

    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());


  }

  logout(){
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser>{
   return this.user$
    .pipe(switchMap(user => {
      if(user){
       return this.userService.get(user.uid).valueChanges();
      }
      return of(null);
    }))
  }
}
