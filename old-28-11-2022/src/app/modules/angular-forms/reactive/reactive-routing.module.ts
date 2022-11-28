import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormsComponent } from '../angular-forms.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './components/reactive-form2/reactive-form2.component';

const routes: Routes = [
  { path: '', component: AngularFormsComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'reactive-form2', component: ReactiveForm2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
