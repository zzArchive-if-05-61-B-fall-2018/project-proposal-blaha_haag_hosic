import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewTermineComponent } from './new-termine.component';



@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NewTermineComponent,
  ],

  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


