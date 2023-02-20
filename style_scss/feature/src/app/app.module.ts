import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './features/ng-content/item/item.component';
import { MultiplesComponent } from './features/ng-content/multiples/multiples.component';
import { ViewComponent } from './features/ng-content/view/view.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './features/state-management/counter.reducer';
import { NgrxComponent } from './features/state-management/ngrx/ngrx.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MultiplesComponent,
    ViewComponent,
    NgrxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
