import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { ServiceService } from './service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ServiceService],
})
export class AppComponent {
  name = 'hello, nada';
  title = 'angular-revision';
  todos: any[] = [];
  showDiv = true;

  custom = '';

  form!: FormGroup<any>;

  @ViewChild('inputElement')
  inputElement!: ElementRef;

  @ViewChild('itemComponent')
  itemComponent!: ItemComponent;

  @ViewChild('nameInput')
  nameInput!: ElementRef;

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
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      age: [0, [Validators.required, Validators.min(18), Validators.max(60)]],
    });

    setTimeout(() => {
      this.service.name = 'Service Changed';
    }, 3000);

    setTimeout(() => {
      this.name = 'goodbyen, nada';
    }, 3000);
  }

  navigate() {
    this.router.navigate(['/details', 1]);
  }

  alertName() {
    alert(this.nameInput.nativeElement.value);
  }

  alert() {
    window.alert('Hello');
  }

  // addItem() {
  //   this.items.push(this.name);
  //   this.name = '';
  // }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }

  submitForm(value: any) {
    console.log(value);
  }
  trackedBy(index: number, item: string) {
    return item;
  }

  handleChange(event: any) {
    this.name = event.target.value;
  }
}

// function sum(a, b){
//   return a + b;
// }

// x = 40;
// y = 50;

// sum(x, y); // 90
