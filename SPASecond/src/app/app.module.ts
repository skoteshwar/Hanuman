import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from "@angular/router";
import {Module1Component} from "./Components/Module1.component";
import {Module2Component} from "./Components/Module2.Component";
import {Module3Component} from "./Components/Module3.Component";
import {Child1Mod1Component} from "./Components/Child1Mod1.component";

import { AppComponent } from './app.component';
import {Approotfile} from "./App.Route";


@NgModule({
  declarations: [
    AppComponent,Module1Component,Module2Component,Module3Component,Child1Mod1Component
  ],
  imports: [
    BrowserModule
    ,RouterModule.forRoot(Approotfile)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
