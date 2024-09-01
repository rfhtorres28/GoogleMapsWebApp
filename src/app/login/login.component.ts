import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModel } from '../models/loginmodel';
import { OnInit } from '@angular/core';
import { LoginUserService } from '../services/login-user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  loginInfo!: LoginModel;

  constructor(private loginRequest: LoginUserService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(5)])
    })
  }

  onSubmit(): void {

     this.loginInfo = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
     }

     this.loginRequest.userLoginRequest(this.loginInfo).subscribe(
      (response: HttpResponse<any>)=>{
        console.log(response.body);
      }, 
      (error: HttpErrorResponse)=>{
        console.error(error.error);
      }
     )


  }




}
