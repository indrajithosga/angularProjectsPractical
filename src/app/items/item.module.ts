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

/* #endregion */

/* #region imports app */
// import { ItemRoutingModule } from './item-routing.module';

// import { ListItemComponent } from './list-item/list-item.component';
// import { CreateItemComponent } from './create-item/create-item.component';

import { ItemService } from './item.service';

/* #endregion */

/* #region declarations */

/* #endregion */

@NgModule({
  declarations: [
    // ListItemComponent,
    // CreateItemComponent
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
    
    // ItemRoutingModule,
  ],
  exports: [      
  ],
  providers: [
    ItemService
  ],
  schemas: []
})
export class ItemModule { }