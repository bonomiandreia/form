import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Subject } from 'rxjs';
import { StepperQuery } from 'src/app/state/stepper.query';

@Component({
  selector: 'app-steppers-form',
  templateUrl: './steppers-form.component.html',
  styleUrls: ['./steppers-form.component.scss']
})
export class SteppersFormComponent implements OnInit, AfterViewInit {
  @ViewChild('stepper', {static: false}) private stepper: MatStepper;
  selected: number;
  counter: Subject<number> = new Subject<number>();
  

  constructor(private stepperQuery: StepperQuery) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.stepperQuery.getValue().step1.completed) {
        this.selected = 1;
      }
      if (this.stepperQuery.getValue().step2.completed || this.stepperQuery.getValue().step3.completed) {
        this.selected = 2;
      }

    });
  }

  goBack() {
    this.stepper.previous();
  }

  goForward() {
    this.stepper.next();
    this.counter.next(this.stepper.selectedIndex);
  }

}
