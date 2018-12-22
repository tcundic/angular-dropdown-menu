import { Component } from '@angular/core';

import { MenuAction } from './dropdown-menu-action.enum';
import { MenuItem } from './components/dropdown-menu-item/menu-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private choice = '';

  // Here define structure of menus you want to create
  // you can define fields:
  // action?: any - define some result which will bubble up from child menu which is clicked
  // isActive?: boolean (default false) - flag which say if menu is open or closed
  // menuItems: MenuItem - subelement which will be created in menu
  // title?: string - title for menu
  // icon?: string - material icon code for <i></i> element
  private fileMenu: MenuItem[] = [
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

  private optionsMenu: MenuItem[] = [
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

  private multiLevelMenu: MenuItem[] = [
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
