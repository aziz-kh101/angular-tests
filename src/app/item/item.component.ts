import { Component, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-component',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  title = 'Item Component, nada';

  item = 'hhhh';

  constructor(public service: ServiceService) {
    const observable = new Observable<string>((observer) => {
      observer.next('Hello'); // f1()
      observer.error('Error'); // f2()
      observer.next('World');
      observer.complete();
      observer.next('World'); // this will not be called
    });

    observable.subscribe(this.f1, this.f2, this.f3);
    // observable.subscribe({
    //   next: (value) => console.log(value),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('completed'),
    // });
  }

  f1(value: string) {
    console.log(value);
  }

  f2(error: any) {
    console.error(error);
  }

  f3() {
    console.log('completed');
  }
}
