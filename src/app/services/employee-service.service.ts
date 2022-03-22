import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../interfaces/employee';
import 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  private url='/assets/data/employees.json'

  //get Employee Data

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url);
  }

}
