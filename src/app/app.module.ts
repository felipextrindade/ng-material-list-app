import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// other imports

import { AppComponent } from './app.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import {AllListsModule} from './components/all-lists/all-lists.module';
import {NewListModule} from './components/new-list/new-list.module';

import { NewListComponent } from './components/new-list/new-list.component';
import { AllListsComponent } from './components/all-lists/all-lists.component';

const appRoutes: Routes = [
  { path: '', component: NewListComponent},
  { path: 'lists', component: AllListsComponent},
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    AllListsModule,
    NewListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
