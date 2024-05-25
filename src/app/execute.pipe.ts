import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'execute',
})
export class ExecutePipe implements PipeTransform {
  transform(value: string): String {
    for (let i = 0; i < 1000000000; i++) {}
    this.add();
    return value + ' Processed';
  }

  add() {}
}
