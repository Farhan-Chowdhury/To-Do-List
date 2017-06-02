import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import { UiRibbonComponent } from './components/ribbon/ribbon.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { SharedModule } from './shared/shared.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    ListDetailsComponent,
    UiRibbonComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    SharedModule,
    routes
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
