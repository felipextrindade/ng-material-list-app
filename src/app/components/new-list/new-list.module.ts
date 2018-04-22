import {NewListComponent} from './new-list.component';
import { MaterialModule } from '../../../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        NewListComponent
    ],
    imports: [
        MaterialModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class NewListModule {}


