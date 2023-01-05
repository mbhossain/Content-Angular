import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { NavigationSidePanelComponent } from './components/navigation-side-panel/navigation-side-panel.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AccountInfoComponent } from './components/pages/account-info/account-info.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SingleDoubleClickDirective } from './directives/single-double-click.directive';


@NgModule({
  declarations: [
    MainComponent,
    DashboardLayoutComponent,
    NavigationSidePanelComponent,
    NavigationBarComponent,
    AccountInfoComponent,
    DashboardComponent,
    HomeComponent,
    SingleDoubleClickDirective
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    SingleDoubleClickDirective
  ]
})
export class MainModule { }
