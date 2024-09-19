import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user.model';
@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  
  constructor(private userService:UserService){}

  userForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(30)]
    }),
    phone: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(10)]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    })
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

  onSubmit() {
    
    // Create the User object from form data
const user: User = {
  username: this.userForm.value.username!,
  phone: this.userForm.value.phone!,
  email: this.userForm.value.email!
};
this.userService.adduser(user);
    console.log(user)
  }
}
