import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppersFormComponent } from './steppers-form.component';

describe('SteppersFormComponent', () => {
  let component: SteppersFormComponent;
  let fixture: ComponentFixture<SteppersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteppersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
