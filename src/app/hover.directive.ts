import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'transparent';
  }

  @Input()
  @HostBinding('style.border')
  border = '1px solid black';

  @Input()
  @HostBinding('style.height')
  height = '200px'; // default value

  @Input()
  @HostBinding('style.width')
  width = '200px';

  constructor(private element: ElementRef) {}
}
