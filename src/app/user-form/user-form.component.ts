// user-form.component.ts

import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  newUser: any = {}; // Initialize an empty object for the new user
  constructor(private userService: UserService, private router: Router) { }


  createUser() {
    if (this.userService.getUsers().length == 0)
       {
      /**The below 3 lines is the logic for adding the user to service and then route to grid */
      this.userService.addUser(this.newUser);
      this.newUser = {}; // Clear input fields
      this.router.navigate(['/user-grid']); // Route back to user-grid
    }
    else if (this.userService.getUsers().length != 0 && !this.duplicateUser(this.newUser)) {
      /**The below 3 lines is the logic for adding the user to service and then route to grid */
      this.userService.addUser(this.newUser);
      this.newUser = {}; // Clear input fields
      this.router.navigate(['/user-grid']); // Route back to user-grid
    }
    else {
      console.log('User already exists. Cannot add duplicate user.');
      // You can display an error message to the user if needed
    }

  }
  duplicateUser(user: any): boolean {
    //changes from here

    let existingUser: any[] = this.userService.getUsers();
    for (const user of existingUser) {
      if (user.username === this.newUser.username && user.phone === this.newUser.phone) {

        alert("This user already exists!");
        console.log("This user already exists.")
        return true;
      }

    }
    return false;
  }

  /**
   * Method to check username contains only Alpabets and not numbers and special character
   * 
   */
  public userNamePatternMatch(userName:string) : boolean
  {
    let pattern=/^[a-zA-Z_ ]+$/;
    
    if(pattern.test(userName))
      {
        return true;
      }else 
      return false;
  }

  
}
