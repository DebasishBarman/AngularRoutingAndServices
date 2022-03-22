import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeServiceService } from './services/employee-service.service';
import {HttpClientModule} from '@angular/common/http';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { EmpInfoComponent } from './components/emp-info/emp-info.component';
import { ChildEmpInfoComponent } from './components/emp-info/child-emp-info/child-emp-info.component';
import { ChildEmpContactComponent } from './components/emp-info/child-emp-contact/child-emp-contact.component'
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    ErrorpageComponent,
    EmpInfoComponent,
    ChildEmpInfoComponent,
    ChildEmpContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
