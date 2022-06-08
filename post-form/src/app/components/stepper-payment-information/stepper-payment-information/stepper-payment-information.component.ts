import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { StepperService } from 'src/app/state/services/stepper.service';
import { StepperQuery } from 'src/app/state/stepper.query';
import { StepperStore } from 'src/app/state/stepper.store';

@Component({
  selector: 'app-stepper-payment-information',
  templateUrl: './stepper-payment-information.component.html',
  styleUrls: ['./stepper-payment-information.component.scss']
})
export class StepperPaymentInformationComponent implements OnInit {
  @Input() events: Observable<number>;
  eventsSubscription: Subscription;

  paymentForm = new FormGroup({
    iban: new FormControl(this.stepperQuery.getValue().step3.iban || ''),
    owner: new FormControl(this.stepperQuery.getValue().step3.owner || ''),
  });
  
  constructor(private stepperService: StepperService, private stepperQuery: StepperQuery) { }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((index) => {
      if (index === 3) {
        let payment = {
          ...this.paymentForm.value,
          completed: true,
        }
        this.stepperService.setStepPayment(payment);
      }
    });
  }

}
