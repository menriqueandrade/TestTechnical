import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { RoutesModule } from './routes.module';
import { DatatableComponent } from './modules/home/pages/home/components/datatable/datatable.component';
import { ModalComponent } from './modules/home/pages/home/components/modal/modal.component';
import { AddPostsComponent } from './modules/post/add-posts/add-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatatableComponent,
    ModalComponent,
    AddPostsComponent,
   
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
