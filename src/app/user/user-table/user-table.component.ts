import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../model/user.model';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {

     @Input() users: Array<User>;
  // @Output() delete = new EventEmitter();

  // onDeleteClick(user) {
  //   this.delete.emit(user);
  // }

  constructor() { }



}
