import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {
    constructor(private http: HttpClient) { }
    private usersURL = 'assets/users.json';
    loadedUsers: any[] = [];

    adduser(user: User) {
        this.loadedUsers.unshift({
            id: new Date().getTime().toString(),
            ...user
        })
        console.log(this.loadedUsers)
    }
    fetchUsers(): Observable<User[]> {
        return this.getUsersAPI().pipe(
            map(fetchedUsers => {
                // Combine manually added users with fetched users
                this.loadedUsers = [...this.loadedUsers, ...fetchedUsers];
                return this.loadedUsers;  // Return the combined array
            })
        );
    }
    
    private getUsersAPI(): Observable<User[]> {
        return this.http.get<User[]>(this.usersURL).pipe(
            map(responseData => {
                const usersArray: User[] = [];
                for (const user of responseData) {
                    usersArray.push(user);
                }
                return usersArray;  // Return the fetched users
            })
        );
    }
}