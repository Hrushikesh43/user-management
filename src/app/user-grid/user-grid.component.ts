// user-grid.component.ts

import { Component, OnInit, booleanAttribute } from '@angular/core';
import { UserService } from '../user.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css'],
})
export class UserGridComponent implements OnInit {
  users: any[] = [];
  i: number;
  

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
  deleteSelectedUsers() {
    debugger;
    const selectedUsers = this.users.filter((user) => user.selected);
    selectedUsers.forEach((user) => {
      this.userService.deleteUser(this.users.indexOf(user)); // Assuming each user has an 'id' property change
    });
    // Refresh the user list after deletion
    this.users = this.userService.getUsers();
  }
  

}
