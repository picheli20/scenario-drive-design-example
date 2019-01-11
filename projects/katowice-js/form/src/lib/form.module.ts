import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { StepperComponent } from './stepper/stepper.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [FormComponent, Step1Component, Step2Component, Step3Component, StepperComponent, HeaderComponent],
  imports: [
    CommonModule,
  ],
  exports: [FormComponent]
})
export class FormModule { }
