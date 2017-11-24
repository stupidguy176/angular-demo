import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.css']
})
export class EditUserPageComponent {

  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: any) => {
      const userId = params['id'];
      if (userId) {
        this.userService.getId(userId).subscribe((user: User) => this.user = user);
      }
    });
  }

  onSave(user: User): void {
    this.userService.editUser(this.user).subscribe(() => this.router.navigate(['/users']));
  }
}
