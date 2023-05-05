import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

import { NavbarAdminComponent } from '../navbar-admin/navbar-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    NavbarAdminComponent,
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
