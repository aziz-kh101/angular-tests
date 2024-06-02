import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { ServiceService } from './service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name = '';
  title = 'angular-revision';
  todos: any[] = [];
  showDiv = true;

  custom = '';

  form!: FormGroup<any>;

  @ViewChild('inputElement')
  inputElement!: ElementRef;

  @ViewChild('itemComponent')
  itemComponent!: ItemComponent;

  students = [
    { name: 'item1', age: 20 },
    { name: 'item2', age: 30 },
    { name: 'item3', age: 40 },
  ];

  // private service = inject(ServiceService); // this second way of injecting service

  constructor(
    public service: ServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // console.log('Component created');
  }

  ngOnInit() {
    this.service.getItemsFromServer().subscribe((result) => {
      this.todos = result;
    });
    // console.log('Component initialized');

    this.form = this.fb.group({
      name: '',
      age: 0,
    });

    setTimeout(() => {
      this.service.name = 'Service Changed';
    }, 3000);
  }

  navigate() {
    this.router.navigate(['/item', 1]);
  }

  // addItem() {
  //   this.items.push(this.name);
  //   this.name = '';
  // }

  submit() {
    console.log(this.form.controls['age']);
  }

  trackedBy(index: number, item: string) {
    return item;
  }

  handleChange(event: any) {
    this.name = event.target.value;
  }
}
