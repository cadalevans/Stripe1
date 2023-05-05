import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './listRequest/listRequest.component';
import { FormComponent } from './form/form.component';
import { RequestLoanComponent } from './request-loan.component';
import { ListpaymentComponent } from './listpayment/listpayment.component';
import { ListClientComponent } from './list-client/list-client.component';
import { FormClientComponent } from './form-client/form-client.component';

const routes: Routes = [{ path : '', component:RequestLoanComponent, children:[
  { path: 'list', component: ListComponent },
  { path: 'form', component: FormComponent },
  {path:'listpayment/:idLoan', component:ListpaymentComponent},
  {path:'listclient', component:ListClientComponent},
  {path:'formclient', component:FormClientComponent}
  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestLoanRoutingModule { }
