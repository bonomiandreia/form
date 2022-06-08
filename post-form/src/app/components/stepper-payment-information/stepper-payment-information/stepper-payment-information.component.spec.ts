import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperPaymentInformationComponent } from './stepper-payment-information.component';

describe('StepperPaymentInformationComponent', () => {
  let component: StepperPaymentInformationComponent;
  let fixture: ComponentFixture<StepperPaymentInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperPaymentInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperPaymentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
