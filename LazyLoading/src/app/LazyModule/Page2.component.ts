import {Component} from "@angular/core";

@Component({
  selector:"page-two",
  templateUrl:"./Page2.component.html"
})

export class Page2Component{
  data:any;
  constructor(){
    this.data="Welcome to Page Two Component";
  }

}
