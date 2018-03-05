import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class CustomerService{
  data:any;

  constructor(private _http:Http){

  }

  getCustomersData(){
    /*return this._http.get("https://www.w3schools.com/angular/customers.php")
      .map((res:Response)=>this.data=res.json().records);*/
    /*return this._http.get("http://localhost:8080/datafromsql")
      .map((res:Response)=>this.data=res.json().recordsets);*/

return this._http.get("http://localhost:8080/datafromsql")
  .map((res:Response)=>this.data=res.json().recordsets);
}

}
