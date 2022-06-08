import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { StepperService } from 'src/app/state/services/stepper.service';
import { StepperQuery } from 'src/app/state/stepper.query';
import { StepperStore } from 'src/app/state/stepper.store';

@Component({
  selector: 'app-stepper-address-information',
  templateUrl: './stepper-address-information.component.html',
  styleUrls: ['./stepper-address-information.component.scss']
})
export class StepperAddressInformationComponent implements OnInit {

  @Input() events: Observable<number>;
  eventsSubscription: Subscription

  addressForm = new FormGroup({
    address: new FormControl(this.stepperQuery.getValue().step2.address || ''),
    houseNumber: new FormControl(this.stepperQuery.getValue().step2.houseNumber || ''),
    zipCode: new FormControl(this.stepperQuery.getValue().step2.zipCode || ''),
    city: new FormControl(this.stepperQuery.getValue().step2.city || ''),
  });
  

  constructor(private stepperService: StepperService, private stepperQuery: StepperQuery) { }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((index) => {
      if (index === 2) {
        let address = {
          ...this.addressForm.value,
          completed: true,
        }
        this.stepperService.setStepAddress(address);
      }
    });
  }

}
