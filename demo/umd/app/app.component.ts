import { Component } from '@angular/core';

import { MenuItem } from '../../../src/index';
import { MenuAction } from './dropdown-menu-action.enum';

@Component({
  selector: 'app-root',
  template: `
      <style>
        .dropdown-menu-container {
            background-color: #242a75;
        }
        
        .dropdown-menu-container .menu .dropdown .dropdown-title {
            background-color: #242a75;
            color: #ffffff;
            font: bold 14px Arial, Helvetica, sans-serif;
        }
        
        .dropdown-menu-container .menu .dropdown .dropdown-title:hover {
            background-color: #50BFD3;
            color: #000000;
        }
        
        .dropdown-menu-container .menu .dropdown .dropdown-title i {
            font-size: 20px;
        } 
      </style>

      <div class="dropdown-menu-container">
      <dropdown-menu [items]="fileMenu" (actionRun)="onMenuAction($event)"></dropdown-menu>
      <dropdown-menu [items]="optionsMenu" (actionRun)="onMenuAction($event)"></dropdown-menu>
      <dropdown-menu [items]="multiLevelMenu" (actionRun)="onMenuAction($event)"></dropdown-menu>
    </div>

    <div>You clicked on {{choice}}</div>
  `
})
export class AppComponent {
  public choice = '';

  // Here define structure of menus you want to create
  // you can define fields:
  // action?: any - define some result which will bubble up from child menu which is clicked
  // isActive?: boolean (default false) - flag which say if menu is open or closed
  // menuItems: MenuItem - subelement which will be created in menu
  // title?: string - title for menu
  // icon?: string - material icon code for <i></i> element
  public fileMenu: MenuItem[] = [
    {
      title: 'File',
      menuItems: [
        {
          title: 'New file...',
          action: MenuAction.NewFile,
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

  public optionsMenu: MenuItem[] = [
    {
      title: 'Options',
      icon: 'build',
      menuItems: [
        {
          title: 'Option 1',
          action: MenuAction.Option1,
          menuItems: []
        },
        {
          title: 'Option 2',
          action: MenuAction.Option2,
          menuItems: []
        }
      ]
    }
  ];

  public multiLevelMenu: MenuItem[] = [
    {
      title: 'Menu',
      menuItems: [
        {
          title: 'Level 1 - Menu 1',
          menuItems: [
            {
              title: 'Level 2 - Menu 1',
              menuItems: [
                {
                  title: 'Level 3 - Menu 1',
                  action: MenuAction.Menu1,
                  menuItems: []
                }
              ]
            }
          ]
        },
        {
          title: 'Level 1 - Menu 2',
          menuItems: [
            {
              title: 'Level 2 - Menu 2',
              menuItems: [
                {
                  title: 'Level 3 - Menu 2',
                  action: MenuAction.Menu2,
                  menuItems: []
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  /**
   * This method is called when user click one option
   * from dropdown menu, event can be passed to
   * next responsible component
   * @param action Current clicked option in dropdown menu (type is Enum)
   */
  onMenuAction(action: MenuAction) {
    switch (action) {
      case MenuAction.NewFile:
        this.choice = 'File Menu - New File';
        break;
      case MenuAction.OpenFile:
        this.choice = 'File Menu - Open File';
        break;
      case MenuAction.Option1:
        this.choice = 'Options Menu - Option 1';
        break;
      case MenuAction.Option2:
        this.choice = 'Options Menu - Option 2';
        break;
      case MenuAction.Menu1:
        this.choice = 'Menu Level 3 - Menu 1';
        break;
      case MenuAction.Menu2:
        this.choice = 'Menu Level 3 - Menu 2';
   }
  }

}
