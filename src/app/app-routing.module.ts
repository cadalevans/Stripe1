import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReCaptchaV3Service } from 'ngx-captcha';

import { PaymentComponent } from './payment/payment.component';
import { MenuComponent } from './menu/menu.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ChartsComponent } from './charts/charts.component';

import { MapsComponent } from '@syncfusion/ej2-angular-maps';

import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  //{path:'',component: MenuComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },

{path: 'map', component:PaymentComponent},
{path: 'maps', component:MapsComponent},
  {path:'charts',component: ChartsComponent},
  {path:'menu',component: MenuComponent},
  {path:'forum', component:ForumComponent},
  {path:'**' , pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgxCaptchaModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
