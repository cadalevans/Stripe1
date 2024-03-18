import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ReclamationAdminComponent } from '../reclamation-admin/reclamation-admin.component';
import { ForumComponent } from '../forum/forum.component';



const routes: Routes = [

  { path:'', component:AdminComponent, children:[
  { path: 'requestLoan', loadChildren: () => import('../request-loan/request-loan.module').then(m => m.RequestLoanModule) },
  { path: 'investment', loadChildren: () => import('../investment/investment.module').then(m => m.InvestmentModule) },

  { path: 'payment', loadChildren: () => import('../payment/payment.module').then(m => m.PaymentModule) },
  { path: 'product', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) },
  { path: 'reclamation',loadChildren:() =>import('../reclamation/reclamation.module').then(m =>m.ReclamationModule)},
 {path:'reclamation-admin', component:ReclamationAdminComponent}
 
 
]}, 
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
