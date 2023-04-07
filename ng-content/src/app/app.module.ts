import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './features/ng-content/item/item.component';
import { MultiplesComponent } from './features/ng-content/multiples/multiples.component';
import { ViewComponent } from './features/ng-content/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MultiplesComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
