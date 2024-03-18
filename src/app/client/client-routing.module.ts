import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ChatbotComponent } from '../chatbot/chatbot.component';
import { HomeComponent } from '../home/home.component';
import { ConsulterReclamationComponent } from '../reclamation/consulter-reclamation/consulter-reclamation.component';
import { AjouterReclamationComponent } from '../reclamation/ajouter-reclamation/ajouter-reclamation.component';
import { ForumComponent } from '../forum/forum.component';
import { UpdateComponent } from '../products/update/update.component';

const routes: Routes = [

  { path:'', component:ClientComponent, children:[
  { path: 'requestLoan', loadChildren: () => import('../request-loan/request-loan.module').then(m => m.RequestLoanModule) },
  
  { path: 'investment', loadChildren: () => import('../investment/investment.module').then(m => m.InvestmentModule) },

  { path: 'payment', loadChildren: () => import('../payment/payment.module').then(m => m.PaymentModule) },
  { path: 'product', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) },
  { path: 'chatbot',component :ChatbotComponent },
  { path: 'home',component :HomeComponent },
  { path: 'reclamation',loadChildren: () => import('../reclamation/reclamation.module').then(m => m.ReclamationModule) },
  {path:'forum',component:ForumComponent},
 // {path:'profil',component:},
  {path:'update',component:UpdateComponent},
  //{path:'signout',component:}
 
]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
