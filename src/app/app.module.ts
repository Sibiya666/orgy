import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { myForm } from './main/form/form.component';

@NgModule({
  declarations: [
    MainComponent,
    myForm
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    MainComponent,
  ]
})
export class AppModule { }
