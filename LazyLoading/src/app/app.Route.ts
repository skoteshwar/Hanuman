import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {Page1Component1} from "./Component1/Page1.component1";


const appRout:Routes =[
  /*{path:"",redirectTo:"page_one",pathMatch:"full"},*/
  {path:"page_one",component:Page1Component1},
  {path:"page_two",loadChildren:"./LazyModule/lazy.module#LazyModule"}
]

export const appRo:ModuleWithProviders=RouterModule.forRoot(appRout);
