/* #region imports angular */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* #endregion */

/* #region imports third party */

/* #endregion */

/* #region imports app */

import { ListGeneralSetupComponent } from './list-general-setup/list-general-setup.component';


// import { CreateGeneralSetupComponent } from './create-general-setup/create-general-setup.component';
// import { ViewGeneralSetupComponent } from './view-general-setup/view-general-setup.component';
// import { EditGeneralSetupComponent } from './edit-general-setup/edit-general-setup.component'; 

/* #endregion */

/* #region declarations */
const _routes: Routes = [
  {
    path: '',
    component: ListGeneralSetupComponent,
    data: {
      title: 'general-setup',
    },
  },

 /*  {
    path: 'create',
    component: CreateGeneralSetupComponent,
    data: {
      title: 'create general-setup',
    },
  },

  {
    path: 'view',
    component: ViewGeneralSetupComponent,
    data: {
      title: 'view general-setup',
    },
  },

  {
    path: 'edit',
    component: EditGeneralSetupComponent,
    data: {
      title: 'edit general-setup',
    },
  }, */


];

/* #endregion */

@NgModule({
  imports: [RouterModule.forChild(_routes)],
  exports: [RouterModule],
})
export class GeneralSetupRoutingModule {}
