import { Component, Output, EventEmitter, Input } from '@angular/core';

import { MenuItem } from '../dropdown-menu-item/menu-item.interface';

@Component({
    selector: 'dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
    styleUrls: ['./dropdown-menu.component.scss']
})

export class DropdownMenuComponent {
    @Output() actionRun = new EventEmitter<any>();

    constructor() {
    }

    @Input() items: MenuItem[];

    /**
     * This method is called when some menu is clicked
     * and event is bubbled up from menu child to menu parent
     * @param action Some result which is bubbled from clicked element
     */
    onActionRun(action: any) {
        this.actionRun.emit(action);
    }
}
