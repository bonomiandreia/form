import { Injectable } from '@angular/core';
import { Query, StoreConfig } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Payment } from '../models/stepper-payment.model';
import { Personal } from '../models/stepper-personal.model';
import { Address } from '../models/stepper-address.model';
import { StepperState, StepperStore } from './stepper.store';

/**
 * Stepper Store
 *
 * @export
 * @class StepperQuery
 * @extends {Query<StepperState>}
 */
@Injectable({ providedIn: 'root' })
export class StepperQuery extends Query<StepperState> {

  readonly step1$: Observable<Personal> ;
  readonly step2$: Observable<Address>;
  readonly step3$: Observable<Payment>;
  readonly success$: Observable<boolean>;

  constructor(protected override store: StepperStore) {
    super(store);

    this.step1$ = this.select(state => state.step1);
    this.step2$ = this.select(state => state.step2);
    this.step3$ = this.select(state => state.step3);
  }
}