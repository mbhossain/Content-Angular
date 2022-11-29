import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeComponent } from './features/viewchild-contentchild/joke/joke.component';
import { ViewComponent } from './features/viewchild-contentchild/view/view.component';
import { JokeListComponent } from './features/viewchild-contentchild/joke-list/joke-list.component';
import { ViewchildComponent } from './features/viewchild/viewchild/viewchild.component';
import { ChildComponent } from './features/viewchild/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    ViewComponent,
    JokeListComponent,
    ViewchildComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
