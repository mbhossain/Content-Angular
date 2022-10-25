/* Angular Stuff */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* 3rd party libraries */
import { ToastrModule } from 'ngx-toastr';

/* Our own stuff */
import { AppComponent } from './app.component';
import { ParentComponent } from './components/component-interaction/parent/parent.component';
import { ChildComponent } from './components/component-interaction/child/child.component';
import { ComponentTwoComponent } from './components/view-encapsulation/component-two/component-two.component';
import { ComponentOneComponent } from './components/view-encapsulation/component-one/component-one.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentStylingComponent } from './components/conponent-styling/component-styling.component';
import { ViewComponent } from './components/view-encapsulation/view/view.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { NgxToastrComponent } from './components/ngx-toastr/ngx-toastr.component';
import { MouseEnterLeaveDirective } from './custom-directive/mouse-enter-leave.directive';
import { HostListenerComponent } from './components/host-listener/host-listener.component';

@NgModule({
  declarations: [
    AppComponent
    , ParentComponent
    , ChildComponent
    , ComponentTwoComponent
    , ComponentOneComponent
    , ComponentStylingComponent
    , ViewComponent
    , DirectivesComponent
    , NgxToastrComponent, MouseEnterLeaveDirective, HostListenerComponent
  ]
  , imports: [
    BrowserModule
    , BrowserAnimationsModule
    , ToastrModule.forRoot({
      timeOut: 3500
      , positionClass: 'toast-bottom-right'
      , preventDuplicates: true
    })
    , AppRoutingModule
  ],
  providers: []
  , bootstrap: [AppComponent]
})
export class AppModule { }
