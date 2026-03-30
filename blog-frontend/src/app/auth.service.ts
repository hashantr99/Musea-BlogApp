import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http=inject(HttpClient)
  constructor() { }

  login (email: string, password: string) {
    return this.http.post<{
      //accessToken: string;
      token: string;
    }>(environment.apiUrl+"/api/auth/login", {email, password});
  }

  get isLoggedIn(){
    if (localStorage.getItem("token")) return true;
    else return false;
  }
}
