import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fc'
})
export class FCPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let celcius = (Number(value) - 32) * (5/9);
    return Math.round(celcius);
  }

}
