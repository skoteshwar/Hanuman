import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from "@angular/http";

import {CustomerService} from "./Services/customer.service";
import {CustomerComponent} from "./Components/customer.component";


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,CustomerComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [CustomerService],
  bootstrap: [CustomerComponent]
})
export class AppModule { }
