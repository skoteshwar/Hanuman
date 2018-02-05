import {Routes} from "@angular/router";

import {Module1Component} from "./Components/Module1.component";
import {Module2Component} from "./Components/Module2.Component";
import {Module3Component} from "./Components/Module3.Component";
import {Child1Mod1Component} from "./Components/Child1Mod1.component";

export const Approotfile:Routes=[
  {path:"module1",component:Module1Component,children:[{path:"Child1",component:Child1Mod1Component}]},
  {path:"module2",component:Module2Component},
  {path:"module3",component:Module3Component}
];
