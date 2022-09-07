/* Angular Stuff */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* 3rd party libraries */

/* Our own stuff */
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EventsComponent } from './components/events/events.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { AuthenticationComponent } from './authentication.component';
import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './token-interceptor/token-interceptor.service';

@NgModule({
  declarations: [
    AuthenticationComponent
    , LoginComponent
    , RegisterComponent
    , EventsComponent
    , SpecialEventsComponent
  ]
  , imports: [
    CommonModule
    , FormsModule
    , HttpClientModule
    , AuthenticationRoutingModule
  ]
  , providers: [
    AuthService
    , EventService
    , AuthGuard
    , {
      provide: HTTP_INTERCEPTORS
      , useClass: TokenInterceptorService
      , multi: true
    }
  ]
})
export class AuthenticationModule { }
