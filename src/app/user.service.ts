// user.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any[] = []; // Array to store user data
  
  constructor() {}

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
}
