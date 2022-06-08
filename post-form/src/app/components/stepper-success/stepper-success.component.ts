import { Component, Input, OnInit } from '@angular/core';
import { catchError, Observable, of, Subscription, throwError } from 'rxjs';
import { StepperService } from 'src/app/state/services/stepper.service';
import { StepperQuery } from 'src/app/state/stepper.query';

@Component({
  selector: 'app-stepper-success',
  templateUrl: './stepper-success.component.html',
  styleUrls: ['./stepper-success.component.scss']
})
export class StepperSuccessComponent implements OnInit {

  @Input() events: Observable<number>;
  eventsSubscription: Subscription;
  message: string;
  messageError  = 'Sending...';

  constructor(private stepperService: StepperService, private stepperQuery: StepperQuery) { }

  ngOnInit(): void {

    this.eventsSubscription = this.events.subscribe((index) => {
      if (index === 3) {
        let sendData = {
          ...this.stepperQuery.getValue().step3,
          costumerId: 1,
        }
        console.log(index)
        this.stepperService.sendIbanToPayment(sendData).pipe(
          catchError((error) =>
          {
            this.message = 'Ops! An error ocurried :(' 
            this.messageError = error.message;
            return of(new Error(error))
          })
        ).subscribe(
          
        );
      }
    });
  }

}
