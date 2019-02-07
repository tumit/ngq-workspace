import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgqDatepickerComponent } from 'ngq-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    NgqDatepickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
