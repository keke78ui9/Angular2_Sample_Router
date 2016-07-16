import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Resolve} from '@angular/router';

import {IForm} from './form';

@Injectable()
export class DataListRetriever implements Resolve<IForm[]> {
  constructor(private http: Http) { }

  getList() {
    return this.http.get('./app/form.json').map(r => r.json());
  }

  resolve() {
    return this.getList();
  }
}