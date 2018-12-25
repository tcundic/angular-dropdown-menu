import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularDropdownMenuModule} from 'angular-dropdown-menu';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularDropdownMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
