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
import { StudentListComponent } from './components/search-functionality/student-list/student-list.component';
import { SearchComponent } from './components/search-functionality/search/search.component';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarTopComponent } from './components/navbar/navbar-top/navbar-top.component';
import { SecondComponent } from './components/share-data/second/second.component';
import { FirstComponent } from './components/share-data/first/first.component';
import { TimerComponent } from './components/timer/timer.component';
import { HomeComponent } from './components/route-guards/components/home/home.component';
import { ContactComponent } from './components/route-guards/components/contact/contact.component';

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
    , NgxToastrComponent
    , MouseEnterLeaveDirective
    , HostListenerComponent
    , StudentListComponent
    , SearchComponent, NavbarTopComponent, SecondComponent, FirstComponent, TimerComponent, HomeComponent, ContactComponent
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
    , HttpClientModule 
    , FormsModule
  ],
  providers: [StudentService]
  , bootstrap: [AppComponent]
})
export class AppModule { }
