import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

/*import {NModule1components} from  "./components/NModule1.components";
import {Module1Component} from "./Components/Module1.component";NModule1Components
*/
import {NModule1Components } from  "./components/NModule1.components";
import {NModule2Components } from "./components/NModule2.components";
import {NModule3Components} from "./components/NModule3.components";
import {NModuleC1Components} from "./components/NModuleC1.components"


import { AppComponent } from './app.component';
import {ApprootfileNM} from "./App.Route";


@NgModule({
  declarations: [
    AppComponent,NModule1Components,NModule2Components,NModule3Components,NModuleC1Components
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ApprootfileNM)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
