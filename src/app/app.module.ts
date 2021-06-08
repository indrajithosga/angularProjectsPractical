/* #region imports angular */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* #endregion */

/* #region imports third party */
import { AccordionModule } from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';


/* #endregion */

/* #region imports app */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers';
import { TopBarComponent } from './containers/_subs/topbar.component';

import { DashboardModule } from "./dashboard";
import { ItemCategoryModule } from "./item-categories";
import { ItemModule } from "./items";
import { ProviderModule } from "./providers";
import { GeneralSetupModule } from "./general-setup";



@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    TopBarComponent,
    
    
  ],
  imports: [

    /* #region angular modules */
    BrowserModule,
    BrowserAnimationsModule,
    /* #endregion */

    /* #region third party modules */
    AccordionModule,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    /* #endregion */

    /* #region app modules */
    AppRoutingModule,

    DashboardModule,
    ItemCategoryModule,
    ItemModule,
    ProviderModule,
    GeneralSetupModule,
    /* #endregion */

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
