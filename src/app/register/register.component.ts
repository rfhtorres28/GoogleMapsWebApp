import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {OnInit} from '@angular/core';
import { RegisterUserService } from '../services/register-user.service';
import { RegisterModel } from '../models/registermodel';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
 
  
  userInfo!: RegisterModel; 
  registerForm!: FormGroup; 
  constructor(private postrequest: RegisterUserService, private router: Router) {}


  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required), 
      email: new FormControl('', [Validators.required, Validators.email]), 
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }


 
  onSubmit(): void {

    const inputPassword = this.registerForm.get('password')?.value;
    const inputConfirmPassword = this.registerForm.get('confirmPassword')?.value;

     if (this.registerForm.valid && inputPassword === inputConfirmPassword) {
        
        this.userInfo = {
             Username: this.registerForm.get('username')?.value,
             Email: this.registerForm.get('email')?.value,
             Password: this.registerForm.get('password')?.value
          }

        console.log(this.userInfo);
        this.postrequest.userDetailsRequest(this.userInfo).subscribe(
            (response:HttpResponse<Boolean>)=>{
                console.log(response.body);
            },
            (error: HttpErrorResponse)=> {
              console.error(error.error);
            })
        this.router.navigate(['login']); 
        }  

     const formControlErrors = {
       username: this.registerForm.get('username')?.errors,
       email: this.registerForm.get('email')?.errors,
       password: this.registerForm.get('password')?.errors,
       confirmPassword: this.registerForm.get('confirmPassword')?.errors
     }
      console.error(formControlErrors);

  }



  



}
