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
import { HomeComponent } from './main/home/home.component';
import { MenuCategoryComponent } from './main/menu-category/menu-category.component';
import { LoginComponent } from './main/login/login.component';
import { MenuComponent } from './main/menu/menu.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { UploadFormComponent } from './main/gallery/upload-form/upload-form.component';
import { UploadDetailsComponent } from './main/gallery/upload-details/upload-details.component';
import { UploadListComponent } from './main/gallery/upload-list/upload-list.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {FileUploadModule, FileSelectDirective} from 'ng2-file-upload';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { ContactsComponent } from './main/contacts/contacts.component';

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
    ContactsComponent,

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
    MatSliderModule,
    MatMenuModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatDialogModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
