import {Component} from "@angular/core";
import {CustomerService} from "../Services/customer.service";

@Component({
  selector:"cust-app",
  templateUrl:"./customer.component.html"
})

export class CustomerComponent{
  data:any;

  constructor(private _custServ:CustomerService){

  }

  ngOnInit(){
    this._custServ.getCustomersData()
      .subscribe(res=>this.data=res,
        err=>console.log(err));
  }
}
