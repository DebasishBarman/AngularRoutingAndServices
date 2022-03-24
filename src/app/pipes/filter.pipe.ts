import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],filterString:boolean,propName:string): any[] {
   const resultArr=[];//
   if(value.length===0 || propName===''){
     return value;
   }
   let count=0;
   for(const item of value){
     if(item[propName]===filterString){ 
       resultArr.push(item)
     }
   }
   return resultArr;
  }

}
