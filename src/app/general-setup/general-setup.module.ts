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
import { GeneralSetupRoutingModule } from './general-setup-routing.module';
import { GeneralSetupService } from './general-setup.service';
import { ListGeneralSetupComponent } from './list-general-setup/list-general-setup.component';
/* import { CreateGeneralSetupComponent } from './create-general-setup/create-general-setup.component';
import { ViewGeneralSetupComponent } from './view-general-setup/view-general-setup.component';
import { EditGeneralSetupComponent } from './edit-general-setup/edit-general-setup.component'; */



/* #endregion */

/* #region declarations */

/* #endregion */

@NgModule({
  declarations: [
    ListGeneralSetupComponent,
    /* CreateGeneralSetupComponent,
    ViewGeneralSetupComponent,
    EditGeneralSetupComponent */
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
    
    GeneralSetupRoutingModule,
  ],
  exports: [      
  ],
  providers: [
    GeneralSetupService
  ],
  schemas: []
})
export class GeneralSetupModule { }