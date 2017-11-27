import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserPageComponent } from './list-user-page/list-user-page.component';
import { CreateUserPageComponent } from './create-user-page/create-user-page.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { EditUserPageComponent } from './edit-user-page/edit-user-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListUserPageComponent
  },
  {
    path: 'create',
    component: CreateUserPageComponent,
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: UserDetailComponent
  },
  {
    path: ':id/edit',
    pathMatch: 'full',
    component: EditUserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
