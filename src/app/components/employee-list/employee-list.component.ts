import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees:any=[];
  constructor(private _empService:EmployeeServiceService,private router:Router) { }

  ngOnInit(): void {
    this._empService.getEmployees().subscribe((data)=>{
      this.employees=data;
    })
  }
  empDetails(details:any){
    this.router.navigate(['employeeDetail',details.id])

  }

}
