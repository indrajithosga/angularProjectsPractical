/* #region imports angular */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* #endregion */

/* #region imports third party */

/* #endregion */

/* #region imports app */
import { PointOfSaleInvoiceComponent } from './point-of-sale-invoices/point-of-sale-invoice.component';
// import { CreateProductCategoryComponent } from './create-product-category/create-product-category.component';

/* #endregion */

/* #region declarations */
const _routes: Routes = [
  {
    path: '',
    component: PointOfSaleInvoiceComponent,
    data: {
      title: 'Point of Sale',
    },
  },
  // {
  //   path: 'create',
  //   component: CreateProductCategoryComponent,
  //   data: {
  //     title: 'create product catagory',
  //   },
  // }
];

/* #endregion */

@NgModule({
  imports: [RouterModule.forChild(_routes)],
  exports: [RouterModule],
})
export class PointOfSaleRoutingModule {}
