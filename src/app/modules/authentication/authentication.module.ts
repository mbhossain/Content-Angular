import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EventsComponent } from './components/events/events.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { AuthenticationComponent } from './authentication.component';
import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthenticationRoutingModule
  ],
  providers: [
    AuthService,
    EventService
  ]
})
export class AuthenticationModule { }
