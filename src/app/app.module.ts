import { Directive, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExecutePipe } from './execute.pipe';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [AppComponent, ExecutePipe, ItemComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
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
