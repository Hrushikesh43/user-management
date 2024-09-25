import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user.model';
import { NgFor,NgIf } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HeaderComponent } from "../header/header.component";
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, NgMultiSelectDropDownModule, HeaderComponent, HttpClientModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  ngOnInit(){
    this.userService.fetchUsers();
  }
  constructor(private userService:UserService){}
  foodOptions: string[] = ['Indian', 'Chinese', 'Thai', 'Punjabi', 'Maharashtrian', 'South-Indian'];
  countries: string[] = ['India', 'USA', 'Japan', 'Russia', 'China', 'England', 'Australia'];
  dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  singleSelectSettings = {
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: false,
    itemsShowLimit: 1,
    allowSearchFilter: true
  };
  userForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]*$')]
    }),
    phone: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(10)]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    foodPreferences: new FormControl([],{validators: [Validators.required]}),
    country: new FormControl('',{validators: [Validators.required]})
  })
   
  get emailIsInvalid()
  { return(
    this.userForm.controls.email.touched && this.userForm.controls.email.invalid &&
    this.userForm.controls.email.dirty
  )
  }

  get userNameIsInvalid()
  {
    return (
      this.userForm.controls.username.touched && this.userForm.controls.username.invalid
      && this.userForm.controls.username.dirty
    )
  }

  get phoneIsInvalid()
  {
    return (
      this.userForm.controls.phone.touched && this.userForm.controls.phone.invalid &&
      this.userForm.controls.phone.dirty
    )
  }

  get foodPreferencesIsInvalid()
  {
    return (
      this.userForm.controls.foodPreferences.invalid
    )
  }

 get countryIsInvalid()
 {
  return (
    this.userForm.controls.country.invalid
  )
 }
  onSubmit() {
    
    // Create the User object from form data
  const user: User = {
  username: this.userForm.value.username!,
  phone: this.userForm.value.phone!,
  email: this.userForm.value.email!,
  foodPreferences: this.userForm.value.foodPreferences!,
  country: this.userForm.value.country!
};
this.userService.adduser(user);
    console.log(user);
    this.userForm.reset();
  }
}
