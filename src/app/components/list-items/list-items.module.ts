import { MaterialModule } from '../../../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {ListItemsComponent} from './list-items.component';

@NgModule({
    declarations: [
        ListItemsComponent,
    ],
    imports: [
        MaterialModule,
        BrowserModule,
        FormsModule
    ]
})
export class ListItemsModule {}
