import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {Page2Component} from "./Page2.component";

const pag2route:Routes = [
  {path:"",redirectTo:"p2",pathMatch:"full"},
  {path:"p2",component:Page2Component}
]

export const pag2Ro:ModuleWithProviders=RouterModule.forChild(pag2route);
