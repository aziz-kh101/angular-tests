import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  constructor(private route: ActivatedRoute) {}

  id = 0;
  snapshaotId = 0;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.snapshaotId = this.route.snapshot.params['id']; // this executed only once
  }
}
