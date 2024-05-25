import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name = '';
  title = 'angular-revision';
  items: string[] = [];

  @ViewChild('inputElement')
  inputElement!: ElementRef;

  @ViewChild('itemComponent')
  itemComponent!: ItemComponent;

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.items = this.service.getItemsFromServer();
  }

  addItem() {
    this.items.push(this.name);
    this.name = '';
  }

  trackedBy(index: number, item: string) {
    return item;
  }

  handleChange(event: any) {
    this.name = event.target.value;
  }
}
