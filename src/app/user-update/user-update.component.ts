import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent {
  updateUser :any={};
  existingUser:any={};
  cities:string[]=['Banglore','Pune','Mumbai','Hyderabad'];
  userIndex: any;
  userPhone:number;
  foodUpdateList=[
    {id:1,name:'Chinese'},
    {id:2,name:'Indian'},
    {id:3,name:'Punjabi'},
    {id:4,name:'South Indian'}
  ];
  constructor(private userService: UserService,private route: ActivatedRoute,private router:Router) {} 

  ngOnInit(): void {
    // Get the user index from the route parameters
    console.log(this.route);
    this.route.params.subscribe((params) => {
      console.log(params);
      this.userPhone=params.number;
      this.updateUser=this.userService.getUserByPhoneNumber(this.userPhone);
     
     
    });
  }
  updateUserDetail()
  {
    console.log(this.updateUser);
    this.existingUser=this.updateUser
    this.router.navigate(['/user-grid']);

  }
}
