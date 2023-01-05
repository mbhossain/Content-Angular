import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';


@NgModule({
  declarations: [
    MainComponent,
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
