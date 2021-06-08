/* #region imports angular */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* #endregion */

/* #region imports third party */

/* #endregion */

/* #region imports app */
import { ListItemCategoryComponent } from './list-item-category/list-item-category.component';
import { CreateItemCategoryComponent } from './create-item-category/create-item-category.component';

/* #endregion */

/* #region declarations */
const _routes: Routes = [
  {
    path: '',
    component: ListItemCategoryComponent,
    data: {
      title: 'item catagories',
    },
  },
  {
    path: 'create',
    component: CreateItemCategoryComponent,
    data: {
      title: 'create item catagory',
    },
  }
];

/* #endregion */

@NgModule({
  imports: [RouterModule.forChild(_routes)],
  exports: [RouterModule],
})
export class ItemCategoryRoutingModule {}
