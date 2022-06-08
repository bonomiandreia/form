import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { StepperStore } from '../stepper.store';
import { Address } from 'src/app/models/stepper-address.model';
import { Personal } from 'src/app/models/stepper-personal.model';
import { Payment } from 'src/app/models/stepper-payment.model';
import { SendPayment } from 'src/app/models/payment-parameters.model';
import { Observable, tap } from 'rxjs';

@Injectable()
export class StepperService {

  constructor(private stepper: StepperStore, private http: HttpClient, private router: Router) { }

  setStepPersonal(data: Personal): void {
    this.stepper.update({ step1: data })
  }

  setStepAddress(data: Address): void {
    this.stepper.update({ step2: data })
  }

  setStepPayment(data: Payment): void {
    this.stepper.update({ step3: data })
  }


  setId(data: string): void {
    this.stepper.update({id:  data});
  }

  sendIbanToPayment(data: SendPayment): Observable<{id: string}> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*') };
    return this.http.post<{id: string}>('https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-paym ent-data',data, config).pipe(
      tap((item) =>  this.setId(item.id)),
    );
  }


}
