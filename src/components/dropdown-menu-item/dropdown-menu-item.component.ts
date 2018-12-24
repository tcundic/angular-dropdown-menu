import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MenuItem } from './menu-item.interface';

@Component({
    selector: 'dropdown-menu-item',
    templateUrl: 'dropdown-menu-item.component.html',
    styleUrls: ['./dropdown-menu-item.component.scss']
})

export class DropdownMenuItemComponent implements MenuItem {

    @Input() menuItems: MenuItem[];

    @Output() actionRun = new EventEmitter<any>();


    action: any;
    isActive = false;
    title = '';

    constructor() {
    }

    onClick(item: MenuItem) {
        if (item.action !== undefined) {
            this.actionRun.emit(item.action);
        }
    }

    /**
     * When user click some action
     * on dropdown menu propagate event up
     * to main component, and close all dropdown menus
     */
    onActionRun(action: any) {
        this.actionRun.emit(action);
        this.menuItems.forEach(i => i.isActive = false);
    }
}
