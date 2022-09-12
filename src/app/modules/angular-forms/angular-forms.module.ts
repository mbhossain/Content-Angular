import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFormsRoutingModule } from './angular-forms-routing.module';
import { AngularFormsComponent } from './angular-forms.component';


@NgModule({
  declarations: [
    AngularFormsComponent
  ],
  imports: [
    CommonModule,
    AngularFormsRoutingModule
  ]
})
export class AngularFormsModule { }
