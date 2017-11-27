import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    if (!this.user) {
      this.user = {
        address: {},
        company: {}
      };
    }
  }

  onSubmit() {
    this.save.emit(this.user);
  }

}
