import {
  afterNextRender,
  afterRender,
  AfterViewInit,
  Component,
  ElementRef, EventEmitter,
  OnInit, output, Output,
  viewChild,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {

  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // @ViewChildren(ButtonComponent) buttons?: ButtonComponent[];
  // available with angular 17+
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')
  enteredTitle = '';
  enteredText = '';

  // @Output() add = new EventEmitter<{title: string, text: string}>();
  add = output<{ title: string, text: string }>();

  constructor() {
    afterRender(() => {
      console.log('afterRender')
    })

    afterNextRender(() => {
      console.log('afterNextRender')
    })
  }

  ngOnInit() {
    console.log("INSIDE ON INIT")
    console.log(this.form()); // @ViewChild is not initialized if we use the decorator @ViewChild
  }

  ngAfterViewInit() {
    console.log("INSIDE AFTER VIEW INIT")
    console.log(this.form());
  }

  onSubmit() {
    // this.form()?.nativeElement.reset()
    this.add.emit({title: this.enteredTitle, text: this.enteredText});

    this.enteredTitle = '';
    this.enteredText = '';

  }
}
