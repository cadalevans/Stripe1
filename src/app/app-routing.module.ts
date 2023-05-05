import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReCaptchaV3Service } from 'ngx-captcha';

import { PaymentComponent } from './payment/payment.component';
import { MenuComponent } from './menu/menu.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ChartsComponent } from './charts/charts.component';
import { BankComponent } from './payment/bank/bank.component';
import { MapsComponent } from '@syncfusion/ej2-angular-maps';
import { RegistreComponent } from './auth/registre/registre.component';
import { VerificationComponent } from './verification/verification.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './auth/forgetpassword/resetpassword/resetpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  //{path:'',component: MenuComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
{path: 'bank', component:BankComponent},
{path: 'map', component:PaymentComponent},
{path: 'maps', component:MapsComponent},
  {path:'charts',component: ChartsComponent},
  {path:'menu',component: MenuComponent},
  {path:'registre', component:RegistreComponent},
  {path:'verification', component:VerificationComponent},
  {path:'forgetPassword', component:ForgetpasswordComponent},
  {path:'resetPassword', component:ResetpasswordComponent},
  {path:'login', component:LoginComponent},
  {path:'forum', component:ForumComponent},
  {path:'**' , pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgxCaptchaModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
