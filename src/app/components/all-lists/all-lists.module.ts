import {AllListsComponent} from './all-lists.component';
import { MaterialModule } from '../../../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { AllListsTableComponent } from './all-lists-table/all-lists-table.component';

@NgModule({
    declarations: [
        AllListsComponent,
        AllListsTableComponent
    ],
    imports: [
        MaterialModule,
        BrowserModule,
        FormsModule
    ]
})
export class AllListsModule {}


