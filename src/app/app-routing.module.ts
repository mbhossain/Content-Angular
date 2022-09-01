/* Angular Stuff */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* 3rd party libraries */

/* Our own stuff */
import { ComponentStylingComponent } from './components/conponent-styling/component-styling.component';
import { ParentComponent } from './components/component-interaction/parent/parent.component';
import { ViewComponent } from './components/view-encapsulation/view/view.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { NgxToastrComponent } from './components/ngx-toastr/ngx-toastr.component';

const routes: Routes = [
  { path: 'component-styling', component: ComponentStylingComponent },
  { path: 'component-interaction', component: ParentComponent },
  { path: 'view-encapsulation', component: ViewComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'ngx-toastr', component: NgxToastrComponent },
  {
    path: 'authentication',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }