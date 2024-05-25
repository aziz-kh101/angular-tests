import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  getItemsFromServer() {
    return ['item1', 'item2', 'item3'];
  }
}
