import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { Step1Component } from './step1/step1.component';

@NgModule({
  declarations: [FormComponent, Step1Component],
  imports: [
  ],
  exports: [FormComponent]
})
export class FormModule { }
