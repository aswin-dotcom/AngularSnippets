import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filer',
})
export class filterPipe implements PipeTransform {
  transform(arr: any, filterstring: string) {
    if (filterstring.toLowerCase() === 'all' || arr.length == 0) {
      return arr;
    } else {
      return arr.filter((std:any) => {
        return std.gender.toLowerCase() == filterstring.toLowerCase();
      });
    }
  }
}
