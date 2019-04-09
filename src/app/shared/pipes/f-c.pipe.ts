import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fC'
})
export class FCPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
