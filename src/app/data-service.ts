import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {createTestCustomers} from './test-data';
import {LoggerService} from './logger.service';
import {Customer} from './model';

@Injectable()
export class DataService {
  private customersUrl = 'api/customers';

  constructor(private loggerService: LoggerService,
              private http: Http,) {
  }

  getCustomersP(): Promise<Customer[]> {
    this.loggerService.log(`getting customers as promise via Http....`);

    return this.http.get(this.customersUrl).toPromise().then(response => {
        const custs = response.json().data as Customer[];
        this.loggerService.log(`Got ${custs.length} customers`);
        return custs;
      },
      error => {
        this.loggerService.log(`An error occured ${ error}`);
        return Promise.reject(`Error happened check the console.`);
      }
    );

  }

  getCustomersO(): Observable<Customer[]> {
    this.loggerService.log(`getting customers as an observable via http ....`);

    return this.http.get(this.customersUrl)
      .map(response => response.json().data as Customer[])
      // .do((custs) => {
      //   this.loggerService.log(`Got ${custs.length} customers`);
      // }
      );
  }


}
