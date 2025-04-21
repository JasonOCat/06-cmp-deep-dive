import {Component, input, ViewEncapsulation} from '@angular/core';

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

export class ControlComponent {
  label = input.required<string>();

// @HostBinding('class') className = 'control';
// @HostListener('click') onClick() {
//   console.log('Clicked');
// }

  onClick() {
    console.log('Clicked');
  }
}
