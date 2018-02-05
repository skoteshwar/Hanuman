import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Page2Component} from "./Page2.component";
import {pag2Ro} from "./page2.route";

@NgModule({
  declarations:[Page2Component],
  imports:[pag2Ro],
  providers:[],
  bootstrap:[Page2Component]
})

export class LazyModule{

}
