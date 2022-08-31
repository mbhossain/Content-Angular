import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthenticationComponent } from './authentication.component';
import { FormsModule } from '@angular/forms';


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
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
