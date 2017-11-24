import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListUserPageComponent } from './user/list-user-page/list-user-page.component';
import { UserService } from './services/user.service';
import { UserTableComponent } from './user/user-table/user-table.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { CreateUserPageComponent } from './user/create-user-page/create-user-page.component';
import { EditUserPageComponent } from './user/edit-user-page/edit-user-page.component';
import { UserFormComponent } from './user/user-form/user-form.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: ListUserPageComponent
  },
  {
    path: 'users/create',
    component: CreateUserPageComponent,
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  {
    path: 'users/:id/edit',
    component: EditUserPageComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ListUserPageComponent,
    UserTableComponent,
    UserDetailComponent,
    CreateUserPageComponent,
    EditUserPageComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
