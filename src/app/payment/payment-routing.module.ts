import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { MapsComponent } from '@syncfusion/ej2-angular-maps';
import { PaymentComponent } from './payment.component';

const routes: Routes = [
  {path: 'bank', component:BankComponent},
{path: 'payment', component:PaymentComponent},
{path: 'maps', component:MapsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
