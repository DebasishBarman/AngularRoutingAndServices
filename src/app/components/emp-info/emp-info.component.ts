import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-emp-info',
  template: `
    <div class="container">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ empid }}</h5>
            <p class="card-text">{{ empFName }} {{ empLName }}</p>
            <div>
              <p>
                <button (click)="info()">Info</button>
                <button (click)="contact()">Contact</button>
              </p>
            </div>
            <router-outlet></router-outlet>
            <a routerLink="/employeeList" class="btn btn-primary">Go Back</a>
            <button class="btn btn-secondary m-4" (click)="goBackId()">
              Prev
            </button>
            <button class="btn btn-secondary m-4" (click)="goNextId()">
              Next
            </button>
            <div class="container">
              <button (click)="hello()">Go to Employees</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class EmpInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    let id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Id is', id);

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.empid = Number(params.get('id'));
      console.log('Current ID is', params.get('id'));
    });

    // this.empid=id;
  }
  empid: number = 1;
  empFName: string = 'Dum';
  empLName: string = 'Dumm';

  goBackId() {
    let prevId = this.empid - 1;
    this.router.navigate(['employeeDetail', prevId]);
  }
  goNextId() {
    let nextId = this.empid + 1;
    this.router.navigate(['employeeDetail', nextId]);
  }

  hello() {
    let selectedId = this.empid ? this.empid : null;
    console.log(selectedId);

    this.router.navigate(['/employeeList', { id: selectedId }]);
  }
  goEmployees() {
    // let selectedId=this.empid?this.empid:null;
    // this.router.navigate(['/employeeList',{id:selectedId}])
  }

  info() {
    this.router.navigate(['info'],{relativeTo:this.route})
  }

  contact() {
    this.router.navigate(['contact'],{relativeTo:this.route})
  }
}
