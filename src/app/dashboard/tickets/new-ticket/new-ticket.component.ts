import {
  afterNextRender,
  afterRender,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
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
export class NewTicketComponent implements OnInit, AfterViewInit{

  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // @ViewChildren(ButtonComponent) buttons?: ButtonComponent[];
  // available with angular 17+
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')

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

  onSubmit(titleInput: string, textInput: string) {
    console.log('SUBMITTED');
    console.log(titleInput + ' ' + textInput);
    // this.form?.nativeElement.reset()
    this.form()?.nativeElement.reset()
  }
}
