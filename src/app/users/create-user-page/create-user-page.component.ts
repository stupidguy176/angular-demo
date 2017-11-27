import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.css']
})
export class CreateUserPageComponent {

  constructor(private userService: UserService,
    private router: Router) { }

  onSave(user) {
    this.userService.createUser(user).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
