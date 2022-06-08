import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperSuccessComponent } from './stepper-success.component';

describe('StepperSuccessComponent', () => {
  let component: StepperSuccessComponent;
  let fixture: ComponentFixture<StepperSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
