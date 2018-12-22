import { EventEmitter } from '@angular/core';

export interface MenuItem {
  action?: any;
  isActive?: boolean;
  menuItems: MenuItem[];
  title?: string;
  icon?: string;
}
