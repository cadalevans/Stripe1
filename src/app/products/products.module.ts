import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/listProduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { FarmerComponent } from './farmer/farmer.component';
import { ListClientComponent } from './list-admin/list-admin.component';
import { CartComponent } from './cart/cart.component';
import { EducationLoanComponent } from './education-loan/education-loan.component';
import { HealthComponent } from './health/health.component';
import { CREATIVEComponent } from './creative/creative.component';
import { UpdateComponent } from './update/update.component';
import { PaymentRoutingModule } from '../payment/payment-routing.module';
import { NgxCaptchaModule } from 'ngx-captcha/lib';
import { RecaptchaFormsModule } from 'ng-recaptcha/lib/recaptcha-forms.module';
import { RecaptchaModule } from 'ng-recaptcha/lib/recaptcha.module';
import { AppRoutingModule } from 'FRONT/src/app/app-routing.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { ToastrModule } from 'ngx-toastr/public_api';
import { NgxStripeModule } from 'ngx-stripe/public_api';
import { NgChartsModule } from 'ng2-charts/public_api';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent,

    ProductsComponent,
    FarmerComponent,
    ListClientComponent,
    CartComponent,
    EducationLoanComponent,
    HealthComponent,
    CREATIVEComponent,
    UpdateComponent
 
  
  ],
  imports: [
    CommonModule, 
    ProductsRoutingModule,
    FormsModule,
    PaymentRoutingModule,
    NgxCaptchaModule,
    RecaptchaFormsModule,
 
    NgbModalModule,ToastrModule.forRoot(),
    NgxStripeModule.forRoot('cle publique'),
    NgChartsModule,
    
  RecaptchaModule,
    NgxCaptchaModule,
    FormsModule,
    ReactiveFormsModule,
 
    
    AppRoutingModule,

  ]
})
export class ProductsModule { }
