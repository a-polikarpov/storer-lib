import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { StorerModule } from '../../../storer/src/lib/storer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    CommonModule,
    StorerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
