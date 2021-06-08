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

import { ProviderRoutingModule } from './provider-routing.module';

import { ListProviderComponent } from './list-provider/list-provider.component';

import { ProviderService } from './provider.service';

/* import { CreateProviderComponent } from './create-provider/create-provider.component';

import { ViewProviderComponent } from './view-provider/view-provider.component'; */



/* #endregion */

/* #region declarations */

/* #endregion */

@NgModule({
  declarations: [     
    ListProviderComponent
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
    
    ProviderRoutingModule,
  ],
  exports: [      
  ],
  providers: [
    ProviderService
  ],
  schemas: []
})
export class ProviderModule { }