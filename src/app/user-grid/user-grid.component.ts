// user-grid.component.ts

import { Component, OnInit, booleanAttribute } from '@angular/core';
import { UserService } from '../user.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {ColDef} from 'ag-grid-community';
@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css'],
})
export class UserGridComponent implements OnInit {
  public users= [];
  public firstUsers= [];
  public secondUsers = [];
  i: number;
  colDefs :ColDef[]=[
    {field:"Action"},
    {field:"Select"},
    {field:"Username"},
    {field:"Phone"},
    {field:"City"},
    {field:"Gender"},
    {field:"Food Preference"}
  ]

  constructor(private userService: UserService) { }

  ngOnInit() {
     
    this.firstUsers = this.userService.getUsers();
    this.userService.getJsonUsers().subscribe(
      data => {
        this.secondUsers = data;
        this.users = [...this.firstUsers, ...this.secondUsers];
        console.log(this.users); // Log the users after they are fetched
      }
    );
    
    
    console.log(this.users);
  }
  
  deleteSelectedUsers() {
    const selectedUsers = this.users.filter((user) => user.selected);
    selectedUsers.forEach((user) => {
      this.userService.deleteUser(this.users.indexOf(user)); // Assuming each user has an 'id' property change
    });
    // Refresh the user list after deletion
    this.users = this.userService.getUsers();
  }
  

}
