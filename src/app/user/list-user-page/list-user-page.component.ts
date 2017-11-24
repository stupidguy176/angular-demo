import { Component, Input, EventEmitter } from '@angular/core';

import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-list-user-page',
  templateUrl: './list-user-page.component.html',
  styleUrls: ['./list-user-page.component.css']
})
export class ListUserPageComponent {

  users: Array<User>;
  constructor(private userService: UserService) {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe((data: any) => {
      this.users = data;
    });
  }

  onDeleteClick(user: User) {
    if (confirm('may muon xoa user: ' + user.name + '?')) {
      this.userService.deleteId(user.id).subscribe(() => {
        this.getUsers();
      });
    }
  }

}
