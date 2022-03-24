import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JSONValue } from '../interfaces/jsonvalue';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenStorage=<JSONValue>JSON.parse(localStorage.getItem('token') !);
    let tokenValue=tokenStorage;
    tokenValue.token;
    console.log(tokenValue.token);
    let tokenizedRequest=req.clone({
      setHeaders:{
        Authorization:`Bearer ${tokenValue.token}`
      }
    })
    return next.handle(tokenizedRequest);
  }
  constructor() { }
}
