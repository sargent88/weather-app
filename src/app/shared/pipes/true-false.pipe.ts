import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trueFalse'
})
export class TrueFalsePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value) {
      return "YES"
    } else if(!value) {
      return "NO"
    }
  }

}
