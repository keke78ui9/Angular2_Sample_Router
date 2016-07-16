import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {IForm} from './form';

@Component({
    selector: 'test-resolver',
    template: `
    <div>router resolve</div>
     <ul class="collection">
      <li class="collection-item" *ngFor="let c of test$ | async">{{c.name}} - {{c.email}}</li>
    </ul>
    `
})
export class TestRouterComponent implements OnInit {
    test$: Observable<IForm[]>;
    constructor(ar: ActivatedRoute) { 
        this.test$ = ar.data.map(d => d['dataToPass']);
        console.info(this.test$);
    }

    ngOnInit() { 

    }

}