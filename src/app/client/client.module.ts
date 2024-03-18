import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';

import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../products/products.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { ForumComponent } from '../forum/forum.component';
import { ChartsComponent } from '../charts/charts.component';
import { NgxCaptchaModule } from 'ngx-captcha/lib';



@NgModule({
  declarations: [
    ClientComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ForumComponent,
    ChartsComponent,
   
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    
  ]
})
export class ClientModule { }
