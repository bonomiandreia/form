import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteppersFormComponent } from './steppers-form.component';
import { RouterModule, Routes } from '@angular/router';
import  { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { StepperPaymentInformationComponent } from 'src/app/components/stepper-payment-information/stepper-payment-information/stepper-payment-information.component';
import { StepperSuccessComponent } from 'src/app/components/stepper-success/stepper-success.component';
import { StepperService } from 'src/app/state/services/stepper.service';
import { StepperAddressInformationComponent } from 'src/app/components/stepper-address-information/stepper-personal-information/stepper-address-information.component';
import { StepperPersonalInformationComponent } from 'src/app/components/stepper-personal-information/stepper-address-information/stepper-personal-information.component';


const routes: Routes = [
  {
    path: '',
    component: SteppersFormComponent
  }
];

@NgModule({
  declarations: [
    SteppersFormComponent,
    StepperAddressInformationComponent,
    StepperPaymentInformationComponent,
    StepperPersonalInformationComponent,
    StepperSuccessComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    SteppersFormComponent
  ],
  providers: [
    StepperService,
  ]
})
export class SteppersFormModule { }
