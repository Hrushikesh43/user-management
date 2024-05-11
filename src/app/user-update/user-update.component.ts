import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent {
  updateUser :any={};
  existingUser:any={};
  userIndex: any;
  userPhone:number;
  constructor(private userService: UserService,private route: ActivatedRoute,private router:Router) {} 

  ngOnInit(): void {
    // Get the user index from the route parameters
    console.log(this.route);
    this.route.params.subscribe((params) => {
     // this.userPhone = params['index']; // Convert to a number (if needed)
      // Now you can use this.userIndex to fetch the specific user data for editing
      //this.updateUser=this.userService.getUserByIndex(this.userIndex);
      console.log(params);
      this.userPhone=params.number;
      this.updateUser=this.userService.getUserByPhoneNumber(this.userPhone);
    });
  }
  updateUserDetail()
  {
    this.existingUser=this.updateUser
    this.router.navigate(['/user-grid']);

  }
}
