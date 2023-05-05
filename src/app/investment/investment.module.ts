import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentRoutingModule } from './investment-routing.module';
import { InvestmentComponent } from './investment.component';

import { FormsModule } from '@angular/forms';
import { EarningComponent } from './earning/earning.component';
import { ListInvestComponent } from './list-invest/list-invest.component';
import { FormclientInvestComponent } from './formclient-invest/formclient-invest.component';
import { FormInvestComponent } from './form-invest/form-invest.component';


@NgModule({
  declarations: [
  

 
   
 

  InvestmentComponent,
  
   EarningComponent,
  
    ListInvestComponent,
        FormclientInvestComponent,
        FormInvestComponent
  ],
  imports: [
    CommonModule,
    InvestmentRoutingModule,
    FormsModule,
  ]
})
export class InvestmentModule { }
