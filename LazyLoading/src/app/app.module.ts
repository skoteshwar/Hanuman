import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from "@angular/router";
import {Page1Component1} from "./Component1/Page1.component1";


import { AppComponent } from './app.component';
import {appRo} from "./app.Route";
/*import {appRout} from "./app.Route";*/


@NgModule({
  declarations: [
    AppComponent,Page1Component1
  ],
  imports: [
    BrowserModule,
    appRo
    /*RouterModule.forRoot(appRout)*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
