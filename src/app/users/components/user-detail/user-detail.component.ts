import { Component } from '@angular/core';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  users: Array<User>;
  user: User;

  constructor(private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.userService.getId(params['id']).subscribe((user: User) => {
          this.user = user;
        });
      }
    });
  }

  onDeleteClick(user: User) {
    if (confirm('ban muon xoa user: ' + user.name + '?')) {
      this.userService.deleteId(user.id).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }
}
