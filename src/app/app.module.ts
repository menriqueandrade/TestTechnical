import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { RoutesModule } from './routes.module';
import { DatatableComponent } from './modules/home/pages/home/components/datatable/datatable.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatatableComponent,
   
  ],
  imports: [
    BrowserModule,
    RoutesModule ,
    HttpClientModule,
    
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
