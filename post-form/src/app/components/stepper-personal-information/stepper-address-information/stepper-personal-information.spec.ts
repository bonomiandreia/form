import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperPersonalInformationComponent } from './stepper-personal-information.component';


describe('StepperAddressInformationComponent', () => {
  let component: StepperPersonalInformationComponent;
  let fixture: ComponentFixture<StepperPersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperPersonalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
