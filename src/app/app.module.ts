import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminMenuComponent } from './admin/menu/menu.component';
import { EditMenuComponent } from './admin/edit-menu/edit-menu.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MainNavComponent } from './nav/main-nav/main-nav.component';
import { MainFooterComponent } from './nav/main-footer/main-footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './main/home/home.component';
import { MenuCategoryComponent } from './main/menu-category/menu-category.component';
import { LoginComponent } from './main/login/login.component';
import { MenuComponent } from './main/menu/menu.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { UploadFormComponent } from './main/gallery/upload-form/upload-form.component';
import { UploadDetailsComponent } from './main/gallery/upload-details/upload-details.component';
import { UploadListComponent } from './main/gallery/upload-list/upload-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminMenuComponent,
    EditMenuComponent,
    MainNavComponent,
    MainFooterComponent,
    HomeComponent,
    MenuCategoryComponent,
    LoginComponent,
    MenuComponent,
    GalleryComponent,
    UploadFormComponent,
    UploadDetailsComponent,
    UploadListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    NgImageFullscreenViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
