import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private _empService:EmployeeServiceService) { }

  public employees:any=[]
  ngOnInit(): void {
    this._empService.getEmployees().subscribe((data)=>{
      this.employees=data;
    });
  }

}
