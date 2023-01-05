import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: ''
    , component: MainComponent
    , children:
      [
        { path: 'dashboard', component: DashboardLayoutComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
