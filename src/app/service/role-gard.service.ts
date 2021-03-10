import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleGardService implements CanActivate{

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate() {

    return this.auth.appUser$
      .pipe(map(appUser => appUser.isAdmin))
  }
}
