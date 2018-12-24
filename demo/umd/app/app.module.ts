import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AngularDropdownMenuModule } from 'dropdownmenu';

@NgModule({
    imports: [ BrowserModule, AngularDropdownMenuModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}