import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interface } from 'readline';
import { JSONValue } from '../interfaces/jsonvalue';
@Injectable({
  providedIn: 'root'
})



export class TableService {

  constructor(private http:HttpClient) { }

  private order_Url='http://localhost:3004/api/orders'


  getOrders(){
    
    let tokenStorage=<JSONValue>JSON.parse(localStorage.getItem('token') !);
    let tokenValue=tokenStorage;
    tokenValue.token;
    console.log(tokenValue.token);
    return this.http.get<any>(this.order_Url,{
      headers:new HttpHeaders({
        'Authorization':`Bearer ${tokenValue.token}`
      })
    });

  }
}
