import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AngularDropdownMenuModule } from './app/angular-dropdown-menu/angular-dropdown-menu.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AngularDropdownMenuModule)
  .catch(err => console.error(err));
