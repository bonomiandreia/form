import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperAddressInformationComponent } from './stepper-address-information.component';

describe('StepperPersonalInformationComponent', () => {
  let component: StepperAddressInformationComponent;
  let fixture: ComponentFixture<StepperAddressInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperAddressInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperAddressInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
