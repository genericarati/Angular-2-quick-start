import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import {createTestCustomers} from './test-data';
import {LoggerService} from './logger.service';
import {Customer} from './model';

@Injectable()
export class DataService {
  constructor(private loggerService : LoggerService){}

    getCustomersP() : Promise<Customer[]>{
      this.loggerService.log(`getting customers as promise ....`);
      const customers = createTestCustomers();

      return new Promise<Customer[]>(resolve => {
        setTimeout(() => {
          this.loggerService.log(`Number of customers -  ${customers.length}`);
          return resolve(customers);
        }, 1500);
      });

    }

  getCustomers() : Observable<Customer[]>{
    this.loggerService.log(`getting customers as an observable ....`);
    const customers = createTestCustomers();

   return of(customers).delay(1500);

  }



}
