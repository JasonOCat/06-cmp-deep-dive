import {
  AfterViewInit,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';


@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})

export class ControlComponent implements AfterViewInit{
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked');
  // }

  label = input.required<string>();
  private el = inject(ElementRef)

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild
    .required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  ngAfterViewInit() {
    console.log("INSIDE NG AFTER VIEW INIT")
    console.log(this.control());
  }

  onClick() {
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control());
  }
}
