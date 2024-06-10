// user.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: any[] = []; // Array to store user data
  private userslist = 'assets/users.json';
 


  constructor(private http: HttpClient) {
    

  }
  
  

  // Method to add a new user
  addUser(user: any) {
    this.users.push(user);
  }

  // Method to get all users
  getUsers() {
    return this.users;
  }

  // Method to delete a user by index
  deleteUser(index: number) :void {
    this.users.splice(index, 1); 
    
}

  getUserByIndex(index:any) : any{
    if (index >= 0 && index < this.users.length) {
      return this.users[index]; // Return the user at the specified index
    } else {
      // Handle out-of-bounds index (optional)
      //console.warn(`User index  is out of bounds.`);
      return null; // Or throw an error, depending on your requirements
    }
  }

  getUserByPhoneNumber(phoneNumber:number) : any{
    
    if (phoneNumber > 0 ) {
      for(let user of this.users)
        {
          if(user.phone===phoneNumber)
            return user;
        }
       
    } else {
      return null; // Or throw an error, depending on your requirements
    }
 
  
  }

  /**
   * Method to pull data from Json file to display users by default
   */
  getJsonUsers(): Observable<User[]> {

    return  this.http.get<User[]>(this.userslist);
  }

  

  
}
