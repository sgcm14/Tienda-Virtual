import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})

export class FilterPipe implements PipeTransform {
  transform(value: any[], filter: string, attr: string, ...args: any[]): any {
    console.log('⚡ ~ transform ~ attr', attr);
    console.log('⚡ ~ transform ~ filter', filter);
    if (!filter) {
      return value;
    }
    return value.filter((item) => {
      return item[attr].toLowerCase().includes(filter.toLowerCase());
    });
  }
}