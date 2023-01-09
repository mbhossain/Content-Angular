import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/auth/components/not-found/not-found.component';
import { AccountInfoComponent } from './components/pages/account-info/account-info.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: ''
    , component: MainComponent
    , children:
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'dashbaord',
          component: DashboardComponent
        },
        {
          path: 'account',
          component: AccountInfoComponent
        },
        {
          path: '**',
          component: NotFoundComponent
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
