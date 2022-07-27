import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentStylingComponent } from './components/conponent-styling/component-styling.component';
import { ParentComponent } from './components/component-interaction/parent/parent.component';
import { ViewComponent } from './components/view-encapsulation/view/view.component';
import { DirectivesComponent } from './components/directives/directives.component';

const routes: Routes = [
  { path: 'component-styling', component: ComponentStylingComponent },
  { path: 'component-interaction', component: ParentComponent },
  { path: 'view-encapsulation', component: ViewComponent },
  { path: 'directives', component: DirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }