import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  orders: any[];

  searchValue: string;
  delivered: boolean = false;
  order:string='createdAt'
  p:number=1;
  // delStatus:boolean

  constructor(private _tableService: TableService) {
    // this.delStatus=Boolean(this.delivered);
    console.log(typeof this.delivered);
  }

  ngOnInit(): void {
    this._tableService.getOrders().subscribe((response) => {
      console.log('Response', response);
      this.orders = response;
    });

    console.log(typeof this.delivered);
    console.log('Status On Init', this.delivered);
  }
  onChange(deviceValue: any) {
    console.log(deviceValue.value);
  }

  // searchData=()=>{
  //   var filter,tr,tds,i,tabD,txtValue;
  //   filter=this.searchValue.toUpperCase();
  //   tabD=document.getElementById('tbod');
    
  //   tr=tabD?.getElementsByClassName('trData');
  //   console.log(tabD);
    
  //   for(i=0;i<tr.length;){
  //     tds=tr[i];
  //     if(tds){
  //       txtValue=tds.textContent || tds.innerHTML;
  //       if(txtValue.toUpperCase().indexOf(filter)>-1){

  //       }
  //     }

  //   }
  // }
  Search(){
    if(this.searchValue==""){
      this.ngOnInit();
    }else{
      this.orders=this.orders.filter(res=>{
        return res._id.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase());
      })
    }
  }


  key:string='createdAt'
  reverse:boolean=false;
  sort(key:any){
    this.key=key;
    this.reverse=!this.reverse;
  }
}
