import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentComponent } from './investment.component';
import { ListComponent } from './list/list.component';
import { FormclientInvestComponent } from './formclient-invest/formclient-invest.component';
import { EarningComponent } from './earning/earning.component';



const routes: Routes = [{ path : '', component:InvestmentComponent, children:[
  { path: 'list', component: ListComponent },
  { path: 'addInves', component: FormclientInvestComponent },
  { path: 'earning', component: EarningComponent },

  
  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentRoutingModule { }
