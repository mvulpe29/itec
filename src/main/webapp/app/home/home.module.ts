import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ItecSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';
import {
    ButtonModule, DialogModule, GMapModule, GrowlModule, InputTextModule, SharedModule,
    TabViewModule
} from 'primeng/primeng';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        ItecSharedModule,
        GMapModule,
        CommonModule,
        GrowlModule,
        FormsModule,
        TabViewModule,
        DialogModule,
        SharedModule,
        ButtonModule,
        InputTextModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forChild([ HOME_ROUTE ])
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItecHomeModule {}
