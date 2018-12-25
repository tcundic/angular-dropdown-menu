import { Component } from '@angular/core';
import { MenuItem } from 'angular-dropdown-menu';
import { MenuAction } from './dropdown-menu-action.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dropdown-menu-app';

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

  private multilevelMenu: MenuItem[] = [
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

  private choice = '';

  /**
   * This method is called when user select option
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
        this.choice = 'Menu Level 3 - Option 1';
        break;
      case MenuAction.Menu2:
        this.choice = 'Menu Level 3 - Option 2';

    }
  }
}
