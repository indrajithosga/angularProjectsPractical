import { Component, Inject, forwardRef, OnInit } from '@angular/core';
import { DefaultLayoutComponent } from './../default-layout/default-layout.component';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopBarComponent implements OnInit {
  items: MenuItem[] = [];
  visibleSidebar: boolean = false;

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        routerLink: ['/item-catagories'],
        // icon:'pi pi-fw pi-file',
      },
      {
        label: 'Appoiments',
        // icon:'pi pi-fw pi-file',
        items: [
          {
            label: 'Products',
            // icon:'pi pi-fw pi-plus',
            routerLink: ['/item-catagories'],
          },
          {
            label: 'Providers',
            // icon:'pi pi-fw pi-plus',
            routerLink: ['/providers'],
          },
          {
            label: 'Generalsetup',
            // icon:'pi pi-fw pi-plus',
            routerLink: ['/general-setup'],
          },
        ],
      },
      {
        label: 'Reporting',
        // icon:'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Warehouse Analysis',
            // icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Inventory Report',
            // icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Forcasted Inventory',
            // icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Product Moves',
            // icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Configurations',
        // icon:'pi pi-fw pi-user',
        items: [
          {
            label: 'Settings',
            // icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Warehouse Management',
            // icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Whareouse',
            // icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                // icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    // icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                // icon:'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
      },
      {
        label: 'Quit',
        // icon:'pi pi-fw pi-power-off'
      },
    ];
  }
}
