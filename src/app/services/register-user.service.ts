import { Injectable } from '@angular/core';
import {HttpClient,  HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from '../environment/environment';
import { RegisterModel } from '../models/registermodel';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  
  private apiUrl; 

  constructor(private http: HttpClient) {
    this.apiUrl = Configuration.apiURL;
  }

  userDetailsRequest(userdetails: RegisterModel): Observable<HttpResponse<boolean>> {

    return this.http.post<boolean>(this.apiUrl + '/api/users/register', userdetails, {observe: 'response'});

  }

}
