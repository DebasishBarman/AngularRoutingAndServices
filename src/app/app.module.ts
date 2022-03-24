import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeServiceService } from './services/employee-service.service';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { EmpInfoComponent } from './components/emp-info/emp-info.component';
import { ChildEmpInfoComponent } from './components/emp-info/child-emp-info/child-emp-info.component';
import { ChildEmpContactComponent } from './components/emp-info/child-emp-contact/child-emp-contact.component';
import { BasicFormComponent } from './components/forms/basic-form/basic-form.component'
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './components/Login/login/login.component';
import { RegistrationComponent } from './components/Login/registration/registration.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { TablesComponent } from './components/tables/tables.component';
import { TabledetailsComponent } from './components/tables/tabledetails/tabledetails.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination'; 
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    ErrorpageComponent,
    EmpInfoComponent,
    ChildEmpInfoComponent,
    ChildEmpContactComponent,
    BasicFormComponent,
    LoginComponent,
    RegistrationComponent,
    NavigateComponent,
    TablesComponent,
    TabledetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
   
  ],
  providers: [EmployeeServiceService,AuthGuard,
  //   {
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:TokenInterceptorService,
  //   multi:true //multiple interceptors can be used
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
