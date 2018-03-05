import {Routes} from "@angular/router";

import {NModule1Components} from "./components/NModule1.components";
import {NModule2Components} from "./components/NModule2.components";
import {NModule3Components} from "./components/NModule3.components";
import {NModuleC1Components} from "./components/NModuleC1.components";

export const ApprootfileNM:Routes=[
  {path:"module1NM",component:NModule1Components},
  {path:"module2NM",component:NModule2Components},
  {path:"module3NM",component:NModule3Components ,children:[{path:"Child1",component:NModuleC1Components}]}
]



