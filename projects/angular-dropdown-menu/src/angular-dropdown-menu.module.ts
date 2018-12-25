import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DropdownMenuItemComponent, DropdownMenuComponent } from './components';

@NgModule({
  declarations: [
    DropdownMenuItemComponent,
    DropdownMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    DropdownMenuComponent,
    DropdownMenuItemComponent
  ],
  providers: []
})
export class AngularDropdownMenuModule { }
