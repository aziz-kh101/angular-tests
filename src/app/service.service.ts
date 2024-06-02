import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceService {
  public name = 'Service';

  constructor(private http: HttpClient) {
    // console.log('Service created');
  }

  getItemsFromServer(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
