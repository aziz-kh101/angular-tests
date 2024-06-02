import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appCustomNgModel]',
})
export class CustomNgModelDirective {
  @Input('appCustomNgModel')
  @HostBinding('value')
  value!: string;

  @Output('appCustomNgModelChange')
  change: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('input', ['$event.target.value']) onInput(value: string) {
    this.change.emit(value);
  }

  constructor() {}
}
