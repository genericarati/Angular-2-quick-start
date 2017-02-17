import {Component, Input} from '@angular/core';
import {Address} from "./model";

@Component({
  moduleId: module.id,
  selector: 'address-comp',
  templateUrl: 'address.component.html'
})
export class AddressComponent {
  @Input() address : Address;

  regions = ['East', 'West', 'North', 'South', 'MidWest'];
  states = ['California', 'Illinois', 'Jalisco', 'Quebec'];
}
