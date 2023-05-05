import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationAdminRoutingModule } from './reclamation-admin-routing.module';
import { ReclamationAdminComponent } from './reclamation-admin.component';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    ReclamationAdminComponent
  ],
  imports: [
    CommonModule,
    ReclamationAdminRoutingModule,
    NgChartsModule,
    NgApexchartsModule,
  ]
})
export class ReclamationAdminModule { }
