// user-form.component.ts

import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup ,ReactiveFormsModule ,Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  newUser: any = {}; // Initialize an empty object for the new user
  genders : string[]=['male','female'];
  city:string[]=['Banglore','Pune','Mumbai','Hyderabad'];
  foodlist=[
    {id:1,name:'Chinese'},
    {id:2,name:'Indian'},
    {id:3,name:'Punjabi'},
    {id:4,name:'South Indian'}
  ];
  constructor(private userService: UserService, private router: Router) { }

  userForm:FormGroup=new FormGroup({
    id: new FormControl('0'),
    username:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    phone: new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10)]),
    city: new FormControl('',[Validators.required]),
    gender:new FormControl('',Validators.required),
    foodControl:new FormControl('',Validators.required)
  }) 

  get user()
  {
    return this.userForm.get('username');
  }

  get phone()
  {
    return this.userForm.get('phone');
  }
  get cityName()
  {
    return this.userForm.get('city');
  }

  createUser() {
    
    if (this.userService.getUsers().length == 0)
       {
      /**The below 3 lines is the logic for adding the user to service and then route to grid */
      this.userService.addUser(this.userForm.value);
      console.log(this.userForm.value);
      this.newUser = {}; // Clear input fields
      this.router.navigate(['/user-grid']); // Route back to user-grid
    }
    else if (this.userService.getUsers().length != 0 && !this.duplicateUser(this.userForm.value)) {
      /**The below 3 lines is the logic for adding the user to service and then route to grid */
      this.userService.addUser(this.userForm.value);
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
      if (user.username === this.userForm.get('username')?.value && user.phone === this.userForm.get('phone')?.value) {

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
