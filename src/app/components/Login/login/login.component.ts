import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login-model';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Injecting the values in contructor
  constructor(private http:HttpClient,private auth:AuthServiceService,private _router:Router) { }

  email:string|number;
  password:string;
  ngOnInit(): void {
  }

  loginModel:LoginModel;
  formData(form:LoginModel){
    
    this.loginModel=new LoginModel(form.email,form.password);
    this.auth.loginUser(this.loginModel).subscribe(
      res=>{
            localStorage.setItem('token',JSON.stringify(res));
            this._router.navigate(['/loggedIn'])
            console.log(res); 
      },
      err=>{
        console.log("Error",err.status);
        
      }

    )

    console.log(localStorage.getItem('login'));
    
    
  }
}
