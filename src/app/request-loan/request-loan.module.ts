import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestLoanRoutingModule } from './request-loan-routing.module';
import { ListComponent } from './listRequest/listRequest.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { RequestLoanComponent } from './request-loan.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListpaymentComponent } from './listpayment/listpayment.component';
import { FormClientComponent } from './form-client/form-client.component';
import { FormclientInvestComponent } from '../investment/formclient-invest/formclient-invest.component';



@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    RequestLoanComponent,
    ListClientComponent,
    ListpaymentComponent,
    FormClientComponent
   
  ],
  imports: [
    CommonModule,
    RequestLoanRoutingModule,
    FormsModule
  ]
})
export class RequestLoanModule { }
