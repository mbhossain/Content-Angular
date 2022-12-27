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
import { HostListenerComponent } from './components/host-listener/host-listener.component';
import { StudentListComponent } from './components/search-functionality/student-list/student-list.component';
import { NavbarTopComponent } from './components/navbar/navbar-top/navbar-top.component';
import { FirstComponent } from './components/share-data/first/first.component';
import { SecondComponent } from './components/share-data/second/second.component';
import { TimerComponent } from './components/timer/timer.component';
import { HomeComponent } from './components/route-guards/components/home/home.component';
import { ContactComponent } from './components/route-guards/components/contact/contact.component';
import { AuthGuard } from './components/route-guards/guards/auth.guard';

const routes: Routes = [
  { path: 'component-styling', component: ComponentStylingComponent },
  { path: 'component-interaction', component: ParentComponent },
  { path: 'view-encapsulation', component: ViewComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'ngx-toastr', component: NgxToastrComponent },
  { path: 'host-listener', component: HostListenerComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'navbar-top', component: NavbarTopComponent },
  { path: 'share-data/first', component: FirstComponent },
  { path: 'share-data/second', component: SecondComponent },
  { path: 'service-scope', component: TimerComponent },
  { path: 'home-use-guard', component: HomeComponent, data: { name: 'contact' } },
  { path: 'contact-use-guard', component: ContactComponent, canActivate: [AuthGuard] },
  {
    path: 'authentication',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'tree-menu',
    loadChildren: () => import('./modules/tree-menu/tree-menu.module').then(m => m.TreeMenuModule)
  },
  {
    path: 'angular-forms',
    loadChildren: () => import('./modules/angular-forms/angular-forms.module').then(m => m.AngularFormsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }