import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ChildEmpContactComponent } from './components/emp-info/child-emp-contact/child-emp-contact.component';
import { ChildEmpInfoComponent } from './components/emp-info/child-emp-info/child-emp-info.component';
import { EmpInfoComponent } from './components/emp-info/emp-info.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import {BasicFormComponent} from "./components/forms/basic-form/basic-form.component";
import { LoginComponent } from './components/Login/login/login.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { TablesComponent } from './components/tables/tables.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'loggedIn',component:NavigateComponent,canActivate:[AuthGuard]},
  {path:'employeeDetails',component:EmployeeDetailsComponent,canActivate:[AuthGuard],canLoad:[AuthGuard]},
  {path:'employeeList',component:EmployeeListComponent,canActivate:[AuthGuard]},
  {path:'forms',component:BasicFormComponent,canActivate:[AuthGuard]},
  {path:'tables',component:TablesComponent,canActivate:[AuthGuard]},
  {
    path:'employeeDetail/:id',
    component:EmpInfoComponent,
    children:[
      {path:'info',component:ChildEmpInfoComponent},
      {path:'contact',component:ChildEmpContactComponent}
    ],
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard]
  },

  {path:'**',component:ErrorpageComponent} //wildCard route must be the last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ChildEmpContactComponent,ChildEmpInfoComponent];
