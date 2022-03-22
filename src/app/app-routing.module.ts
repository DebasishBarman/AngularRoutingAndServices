import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildEmpContactComponent } from './components/emp-info/child-emp-contact/child-emp-contact.component';
import { ChildEmpInfoComponent } from './components/emp-info/child-emp-info/child-emp-info.component';
import { EmpInfoComponent } from './components/emp-info/emp-info.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

const routes: Routes = [
  {path:'',redirectTo:'/employeeDetails',pathMatch:'full'},
  {path:'employeeDetails',component:EmployeeDetailsComponent},
  {path:'employeeList',component:EmployeeListComponent},
  {
    path:'employeeDetail/:id',
    component:EmpInfoComponent,
    children:[
      {path:'info',component:ChildEmpInfoComponent},
      {path:'contact',component:ChildEmpContactComponent}
    ]
  },
  
  {path:'**',component:ErrorpageComponent} //wildCard route must be the last 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ChildEmpContactComponent,ChildEmpInfoComponent];
