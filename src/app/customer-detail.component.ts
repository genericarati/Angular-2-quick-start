import { Component } from '@angular/core';
import {Customer} from "./model";

@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html'
})
export class CustomerDetailComponent  {
  regions = ['East', 'West', 'North', 'South', 'MidWest'];
  states = ['California', 'Illinois', 'Jalisco', 'Quebec'];

  customer : Customer;
  showAddress = true;
}
