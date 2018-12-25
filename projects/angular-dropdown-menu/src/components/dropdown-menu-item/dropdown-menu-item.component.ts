import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MenuItem } from './menu-item.interface';

@Component({
    selector: 'dropdown-menu-item',
    templateUrl: 'dropdown-menu-item.component.html',
    styleUrls: ['./dropdown-menu-item.component.scss']
})

export class DropdownMenuItemComponent implements MenuItem {

    @Input() public menuItems: MenuItem[];

    @Output() public actionRun = new EventEmitter<any>();

    public action: any;
    public isActive = false;
    public title = '';

    public onClick(item: MenuItem) {
        if (item.action !== undefined) {
            this.actionRun.emit(item.action);
        }
    }

    /**
     * When user click some action
     * on dropdown menu propagate event up
     * to main component, and close all dropdown menus
     */
    public onActionRun(action: any) {
        this.actionRun.emit(action);
        this.menuItems.forEach((i) => i.isActive = false);
    }
}
