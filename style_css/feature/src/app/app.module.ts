import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeComponent } from './features/viewchild-contentchild/joke/joke.component';
import { ViewComponent } from './features/viewchild-contentchild/view/view.component';
import { JokeListComponent } from './features/viewchild-contentchild/joke-list/joke-list.component';
import { ViewchildComponent } from './features/viewchild/viewchild/viewchild.component';
import { ChildComponent } from './features/viewchild/child/child.component';
import { CourcesComponent } from './features/input-output-eventEmitter/cources/cources.component';
import { FilterComponent } from './features/input-output-eventEmitter/filter/filter.component';
import { ViewComponentIo } from './features/input-output-eventEmitter/view/view.component';
import { NameEditorComponent } from './features/reactive-form/name-editor/name-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './features/reactive-form/profile-editor/profile-editor.component';
import { ValidateFormInputComponent } from './features/template-driven-form/validate-form-input/validate-form-input.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    ViewComponent,
    JokeListComponent,
    ViewchildComponent,
    ChildComponent,
    CourcesComponent,
    FilterComponent,
    ViewComponentIo,
    NameEditorComponent,
    ProfileEditorComponent,
    ValidateFormInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
