﻿import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS, XHRBackend} from '@angular/http';
import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

bootstrap( AppComponent, [HTTP_PROVIDERS, 
    {provide: XHRBackend, useClass: InMemoryBackendService}
    {provide: SEED_DATA, useClass: InMemoryDataService}
    ]);

    