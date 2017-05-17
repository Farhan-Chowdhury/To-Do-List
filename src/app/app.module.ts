import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdDialogModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { AddlistComponent } from './components/add-list/add-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddlistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDialogModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
