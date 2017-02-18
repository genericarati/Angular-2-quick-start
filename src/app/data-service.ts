import { Injectable } from '@angular/core';
import {createTestCustomers} from "./test-data";
import {LoggerService} from "./logger.service";
import {Customer} from './model';

@Injectable()
export class DataService {
    getCustomers(){
      this.loggerService.log(`getting customers as promise ....`);
      const customers = createTestCustomers();

      return new Promise<Customer[]>(resolve => {
        setTimeout(() => {
          this.loggerService.log(`Number of customers -  ${customers.length}`);
          return resolve(customers);
        }, 1500)
      })

    }

    constructor(private loggerService : LoggerService){}

}
