import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable({providedIn: "root"})
export class UserService 
{
    private users=[
        {
            id: '1',
            username: 'Hrushikesh',
            phone: '8180078016',
            email: 'kajalehrushikesh@gmail.com'
        }
    ];
 adduser(user: User)
 {
  this.users.unshift({
    id: new Date().getTime().toString(),
   ...user
  })
  console.log(this.users)
 }
}