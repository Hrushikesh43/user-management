import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {
    constructor(private http: HttpClient) { }
    private usersURL = 'assets/users.json';
    loadedusers: any[] = [];

    adduser(user: User) {
        this.loadedusers.unshift({
            id: new Date().getTime().toString(),
            ...user
        })
        console.log(this.loadedusers)
    }
    fetchUsers(): User[] {
        this.getUsersAPI();
        return this.loadedusers;
    }

private getUsersAPI() {
        this.http.get<User[]>(this.usersURL)
            .pipe(map(responseData => {
                const usersArray: User[] = [];
                for (const user of responseData) {
                    usersArray.push(user)
                }
                return usersArray
            }))
            .subscribe(jsonUsers => {
                this.loadedusers = jsonUsers;
                console.log('Loaded users are', this.loadedusers)

            }
            )
    }
}