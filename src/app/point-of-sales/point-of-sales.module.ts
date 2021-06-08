/* #region imports angular */
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* #endregion */

/* #region imports third party */
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { SplitterModule } from 'primeng/splitter';
import { PanelModule } from 'primeng/panel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DialogModule } from 'primeng/dialog';
import { ChipModule } from 'primeng/chip';


/* #endregion */

/* #region imports app */
import { PointOfSaleRoutingModule } from './point-of-sales-routing.module';

import { PointOfSaleInvoiceComponent } from './point-of-sale-invoices/point-of-sale-invoice.component';
// import { CreateProductCategoryComponent } from './create-product-category/create-product-category.component';

// import { ProductCategoryService } from './product-category.service';

/* #endregion */

/* #region declarations */

/* #endregion */

@NgModule({
  declarations: [
    PointOfSaleInvoiceComponent
    // CreateProductCategoryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    DividerModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    TooltipModule,
    CardModule,
    TabViewModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    SplitterModule,
    PanelModule,
    AutoCompleteModule,
    DialogModule,
    ChipModule,
    
    PointOfSaleRoutingModule,
  ],
  exports: [      
  ],
  providers: [
    //ProductCategoryService
  ],
  schemas: []
})
export class PointOfSaleModule { }