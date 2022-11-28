import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeComponent } from './features/viewchild-contentchild/joke/joke.component';
import { ViewComponent } from './features/viewchild-contentchild/view/view.component';
import { JokeListComponent } from './features/viewchild-contentchild/joke-list/joke-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    ViewComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
