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
import {NewItemModule} from './components/new-item/new-item.module';
import {ListItemsModule} from './components/list-items/list-items.module';

import { NewListComponent } from './components/new-list/new-list.component';
import { AllListsComponent } from './components/all-lists/all-lists.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { ListItemsComponent } from './components/list-items/list-items.component';

const appRoutes: Routes = [
  { path: '', component: NewListComponent},
  { path: 'lists', component: AllListsComponent},
  { path: 'new-item', component: NewItemComponent},
  { path: 'list/:id', component: ListItemsComponent}
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
    NewListModule,
    NewItemModule,
    ListItemsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
