import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HomeComponent} from "./Home/Home.component";


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
