import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const data=new Date(value);
    //day //month//year 
    const fM=`${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    return fM;  }
  

}
