import { HomeComponent } from './main/home/home.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { UploadListComponent } from './main/gallery/upload-list/upload-list.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { EditMenuComponent } from './admin/edit-menu/edit-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMenuComponent } from './admin/menu/menu.component';
import { LoginComponent } from './main/login/login.component';
import { AuthGuardService } from './service/auth-guard.service';
import { RoleGardService } from './service/role-gard.service';
import { MenuComponent } from './main/menu/menu.component';
import { UploadFormComponent } from './main/gallery/upload-form/upload-form.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"menu",component:MenuComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"gallery/list",component:UploadListComponent},
  {path:"gallery/upload",component:UploadFormComponent},
  {path:"contacts",component:ContactsComponent},
  {path:"login",component:LoginComponent},


  {path:"admin/menu/new",component:AdminMenuComponent, canActivate:[AuthGuardService,RoleGardService]},
  {path:"admin/menu/:id",component:AdminMenuComponent, canActivate:[AuthGuardService,RoleGardService]},
  {path:"admin/menu",component:EditMenuComponent, canActivate:[AuthGuardService,RoleGardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
