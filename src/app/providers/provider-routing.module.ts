/* #region imports angular */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* #endregion */

/* #region imports third party */

/* #endregion */

/* #region imports app */

import { ListProviderComponent } from './list-provider/list-provider.component';


// import { CreateProviderComponent } from './create-provider/create-provider.component';
// import { ViewProviderComponent } from './view-provider/view-provider.component';
// import { EditProviderComponent } from './edit-provider/edit-provider.component';

/* #endregion */

/* #region declarations */
const _routes: Routes = [
  {
    path: '',
    component: ListProviderComponent,
    data: {
      title: 'providers',
    },
  },

 /*  {
    path: 'create',
    component: CreateProviderComponent,
    data: {
      title: 'create provider',
    },
  },

  {
    path: 'view',
    component: ViewProviderComponent,
    data: {
      title: 'view providers',
    },
  },

  {
    path: 'edit',
    component: EditProviderComponent,
    data: {
      title: 'edit provider',
    },
  }, */


];

/* #endregion */

@NgModule({
  imports: [RouterModule.forChild(_routes)],
  exports: [RouterModule],
})
export class ProviderRoutingModule {}
