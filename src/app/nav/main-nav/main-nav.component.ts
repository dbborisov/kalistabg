import { AppUser } from './../../models/app-user';
import { AuthService } from './../../service/auth.service';
import { UserService } from './../../service/user.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  appUser:AppUser ;
  isAdmin = false;
  scrHeight: any;
  scrWidth: any;
  options: FormGroup;

  constructor(private breakpointObserver: BreakpointObserver,private auth:AuthService,private fb: FormBuilder) {
    this.getScreenSize();
   auth.appUser$.subscribe(user=>{
     this.appUser = user;
    this.isAdmin = user.isAdmin;
    });
   this.options = fb.group({
    bottom: 0,
    fixed: false,
    top: 0
  });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log(this.scrHeight, this.scrWidth);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

 logout(){
    this.auth.logout();
 }

  ngOnInit() {
  }


}
