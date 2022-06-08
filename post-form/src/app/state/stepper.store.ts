import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Address } from '../models/stepper-address.model';
import { Payment } from '../models/stepper-payment.model';
import { Personal } from '../models/stepper-personal.model';
export interface StepperState {
  step1: Personal,
  step2: Address,
  step3: Payment,
  id: string,
}
/**
 * Create initial state
 */
export function createInitialState(): StepperState {
  return { 
    step1: {
        firstName: '',
        lastName: '',
        phone: '',
        completed: false,
    },
    step2: {
        address: '',
        houseNumber: '',
        city: '',
        zipCode: '',
        completed: false,
    },
    step3: {
        iban: '',
        owner: '',
        completed: false,
    },
    id: '',
  };
}

/**
 * StepperState
 *
 * @export
 * @class StepperState
 * @extends {Store<StepperState>}
 */
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'stepper', resettable: true })
export class StepperStore extends Store<StepperState> {

  constructor() {
    super(createInitialState());
  }
}