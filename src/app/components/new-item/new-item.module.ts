import {NewItemComponent} from './new-item.component';
import { MaterialModule } from '../../../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        NewItemComponent
    ],
    imports: [
        MaterialModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class NewItemModule {}
