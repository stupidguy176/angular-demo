import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { ListUserPageComponent } from './list-user-page/list-user-page.component';
import { EditUserPageComponent } from './edit-user-page/edit-user-page.component';
import { CreateUserPageComponent } from './create-user-page/create-user-page.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [
    ListUserPageComponent,
    EditUserPageComponent,
    CreateUserPageComponent,
    UserDetailComponent,
    UserFormComponent,
    UserTableComponent
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
