import { Directive, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExecutePipe } from './execute.pipe';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './hover.directive';
import { CustomNgModelDirective } from './custom-ng-model.directive';
import { ServiceService } from './service.service';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExecutePipe,
    ItemComponent,
    HoverDirective,
    CustomNgModelDirective,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// 3 types Directive in Angular

//   * declarations

//     @Directive
//       - Attribute
//       - Structural

//     @Component
//       - Components

//     @Pipe
//       - Pipes

//   * imports
//       - Modules

//   * exports
//     - list of declarations that should be available to other modules

// pure function
//   - no side effects
//   - same input -> same output
//   - no shared state
//   - immutable
//   - composable
//   - testable
