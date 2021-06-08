import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { ItemCategoryModule } from './item-categories';
import { PointOfSaleModule } from './point-of-sales';
import { ProviderModule } from './providers';

const routes: Routes = [
  
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        //canActivate: [AuthenticationGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'item-catagories',
                loadChildren: () => import('./item-categories/item-category.module').then(m => m.ItemCategoryModule)
            },
            {
                path: 'point-of-sale',
                loadChildren: () => import('./point-of-sales/point-of-sales.module').then(m => m.PointOfSaleModule)
            },
            {
                path: 'providers',
                loadChildren: () => import('./providers/provider.module').then(m => m.ProviderModule)
            }, 
            {
                path: 'general-setup',
                loadChildren: () => import('./general-setup/general-setup.module').then(m => m.GeneralSetupModule)
            }, 

        ]

    },
    // path: '',
    // component: DefaultLayoutComponent,
    // pathMatch: 'full',
    // children: [
    //         {
    //             path: 'item-categories',
    //             loadChildren: () => import('./item-categories/item-category.module').then(m => m.ItemCategoryModule)
    //         },            
    //     ]
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
