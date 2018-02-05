import {Component} from "@angular/core";

@Component({
  selector:"page-one",
  templateUrl:"./Page1.component1.html"
})

export class Page1Component1{
  data:any;
  constructor(){
    this.data="Welcome to Page One Component";
  }

}
