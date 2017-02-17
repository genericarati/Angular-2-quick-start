import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {


  log(param: string) {
    console.log(param);
  }

}
