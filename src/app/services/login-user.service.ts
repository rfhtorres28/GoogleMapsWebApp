import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Configuration } from '../environment/environment';
import { LoginModel } from '../models/loginmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  
  private apiUrl;

  constructor(private http: HttpClient) { 
    this.apiUrl = Configuration.apiURL;
  }
  
  userLoginRequest(userDetails: LoginModel): Observable<HttpResponse<LoginModel>> {
    

    return this.http.post<LoginModel>(this.apiUrl + '/api/users/login', userDetails, {observe: 'response',
      withCredentials: true // always set this so that the browser will not block the cookie attach to the response from the server
    });

  }


  


}
