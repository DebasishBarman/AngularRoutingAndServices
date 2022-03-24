import { Component, OnInit } from '@angular/core';
import { InternModel } from 'src/app/models/intern-model';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
  email:any;
  username:any;
  mobile:any;
  frontend:any;
  backend:any;
  mobiledev:any;
  mentor:any;
  preference:any;
  hello:InternModel;
  internModel=new InternModel('','','','','','','','')
  formData(data:InternModel){
    // console.log(data);
    this.hello=new InternModel(data.email,data.username,data.mobile,data.frontend,data.backend,data.mobiledev,data.mentor,data.preference);

    console.log(this.hello);
    
    
  }

}
