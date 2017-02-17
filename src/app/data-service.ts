import { Injectable } from '@angular/core';
import {createTestCustomers} from "./test-data";
import {LoggerService} from "./logger.service";

@Injectable()
export class DataService {
    getCustomers(){
      this.loggerService.log(`getting customers as promise`)
      const numberOfCustomers = createTestCustomers();
      return new Promise(resolve => {
        setTimeout(() => {
          this.loggerService.log(`Number of customers -  ${numberOfCustomers.length}`);
          return resolve(numberOfCustomers);
        }, 1500)
      })

    }

    constructor(private loggerService : LoggerService){}

}
