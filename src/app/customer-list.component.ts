import {Component, OnInit} from '@angular/core';
import {Customer} from "./model";
import {DataService} from "./data-service";
import {LoggerService} from "./logger.service";

@Component({
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']

})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  customer: Customer;

  constructor(
    private dataService: DataService,
    private loggerService: LoggerService) {
  }

  ngOnInit() {
    this.customers = this.dataService.getCustomers();
    this.loggerService.log("Successfully injected logger service");
  }

  shift(increment: number) {
    let ix = this.customers.findIndex(c => c === this.customer) + increment;
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }

}
