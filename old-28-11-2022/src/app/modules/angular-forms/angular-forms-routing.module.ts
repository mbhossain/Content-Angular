import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormsComponent } from './angular-forms.component';

const routes: Routes = [
  { path: '', component: AngularFormsComponent },
  {
    path: 'template-driven',
    loadChildren: () => import('./template-driven/template-driven.module').then(m => m.TemplateDrivenModule)
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularFormsRoutingModule { }
