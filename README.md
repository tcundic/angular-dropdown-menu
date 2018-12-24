# Angular dropdown menu

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) `version 7.1.3`

## Functionalities

This module enables you to create arbitrary number of dropdown menu levels and, on click child can bubble result up to main component

## Installing
```bash
npm install --save angular-dropdown-menu
```

## Usage

### Import
```typescript
import {AngularDropdownMenuModule} from 'angular-dropdown-menu';

imports: [
    AngularDropdownMenuModule
]

// in your main component define structure and import (for example):
import {MenuItem} from 'angular-dropdown-menu';

public fileMenu: MenuItem[] = [
    {
      title: 'File',
      menuItems: [
        {
          title: 'New file...',
          action: MenuAction.NewFile, // give some value which will be passed when user click on menu (in this case enum)
          menuItems: []
        },
        {
          title: 'Open file...',
          action: MenuAction.OpenFile,
          menuItems: []
        }
      ]
    }
];

// in your template:
<div class="dropdown-menu-container">
  <dropdown-menu [items]="fileMenu" (actionRun)="onMenuAction($event)"></dropdown-menu>
</div>

// Add some styles:
.dropdown-menu-container {
    background-color: #242a75;
}

.dropdown-menu-container ::ng-deep .menu .dropdown .dropdown-title {
    background-color: #242a75;
    color: #ffffff;
    font: bold 14px Arial, Helvetica, sans-serif;
}

.dropdown-menu-container ::ng-deep .menu .dropdown .dropdown-title:hover {
    background-color: #50BFD3;
    color: #000000;
}

.dropdown-menu-container ::ng-deep .menu .dropdown .dropdown-title i {
    font-size: 20px;
}
```

