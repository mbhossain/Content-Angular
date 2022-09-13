import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveForm2Component } from './components/reactive-form2/reactive-form2.component';


@NgModule({
  declarations: [
    ReactiveForm2Component
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
