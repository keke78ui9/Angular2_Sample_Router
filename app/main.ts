import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {enableProdMode} from '@angular/core';
import {provideRouter, RouterConfig} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {NameComponent} from './name.component';
import {TestRouterComponent} from './testRouter.component';
import {DataListRetriever} from './someData';
import {HTTP_PROVIDERS} from '@angular/http';
const routes: RouterConfig = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'hello/:who', component: NameComponent },
  { path: 'test', component: TestRouterComponent,
  resolve: {dataToPass:DataListRetriever } }
];


bootstrap(AppComponent, [
  provideRouter(routes),
  DataListRetriever,
  HTTP_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy }
]);