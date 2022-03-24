import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient,private _router:Router) { }

  private loginUrl='http://localhost:3004/api/users/login'
  loginUser(user:any){
    return this.http.post<any>(this.loginUrl,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  loggedOut(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);

  }

}
