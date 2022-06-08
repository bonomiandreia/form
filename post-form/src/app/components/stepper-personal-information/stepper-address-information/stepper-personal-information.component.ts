import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { StepperService } from 'src/app/state/services/stepper.service';
import { StepperQuery } from 'src/app/state/stepper.query';
import { StepperStore } from 'src/app/state/stepper.store';

@Component({
  selector: 'app-stepper-personal-information',
  templateUrl: './stepper-personal-information.component.html',
  styleUrls: ['./stepper-personal-information.component.scss'],
  providers:  [ StepperService ]
})
export class StepperPersonalInformationComponent implements OnInit {


  @Input() events: Observable<number>;
  eventsSubscription: Subscription;

  personalForm = new FormGroup({
    firstName: new FormControl(this.stepperQuery.getValue().step1.firstName || ''),
    lastName: new FormControl(this.stepperQuery.getValue().step1.lastName || ''),
    phone: new FormControl(this.stepperQuery.getValue().step1.phone || ''),
  });

  constructor(private stepperService: StepperService, private stepperQuery: StepperQuery) {}

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((index) => {
      if (index === 1) {
        let personal = {
          ...this.personalForm.value,
          completed: true,
        }
        this.stepperService.setStepPersonal(personal);
      }

    });
  }

}
