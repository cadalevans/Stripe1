;
import { NgChartsModule } from 'ng2-charts'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';
import { PaymentComponent } from './payment/payment.component';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { NgxCaptchaModule } from 'ngx-captcha';
import { GoogleMapsModule } from '@angular/google-maps';

import{HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { NgxStripeModule } from 'ngx-stripe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PaymentService } from './payment/payment.service';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { MapInfoWindowComponent } from './map-info-window/map-info-window.component';
import { MapPolylineComponent } from './map-polyline/map-polyline.component';
import { MapPolygonComponent } from './map-polygon/map-polygon.component';


import { LegendService, MarkerService, MapsTooltipService, DataLabelService, BubbleService, NavigationLineService, SelectionService, AnnotationsService, ZoomService, MapsModule } from '@syncfusion/ej2-angular-maps';



import { ChartsComponent } from './charts/charts.component';
import { BankComponent } from './payment/bank/bank.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoaderComponent } from './loader/loader.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './auth/forgetpassword/resetpassword/resetpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { VerificationComponent } from './verification/verification.component';
import { FormClientComponent } from './request-loan/form-client/form-client.component';
import { ListComponent } from './request-loan/listRequest/listRequest.component';
import { FormComponent } from './request-loan/form/form.component';
import { EarningComponent } from './investment/earning/earning.component';
import { HeaderComponent } from './header/header.component';
import { UpdateComponent } from './products/update/update.component';
import { UpdateProfileComponent } from './auth/update-profile/update-profile.component';


/**
 * Module
 */







@NgModule({
  declarations: [
    AppComponent,
     

   MenuComponent,
    ModalComponent,
    PaymentComponent,
    MapMarkerComponent,
    MapInfoWindowComponent,
    MapPolylineComponent,
    MapPolygonComponent,
    NavbarComponent,
    BankComponent,
    RegistreComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    LoginComponent,
    LoaderComponent,
    VerificationComponent,
    UpdateProfileComponent
   

 
   
    


  ],
  imports: [
    NgChartsModule,
    RecaptchaModule,
    MapsModule,
    GoogleMapsModule,
    RecaptchaFormsModule,
    BrowserModule,
  RecaptchaModule,
    NgxCaptchaModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModalModule,ToastrModule.forRoot(),
    NgxStripeModule.forRoot('cle publique'),
    NgChartsModule,
    
 
  ],
  
  entryComponents:[ModalComponent],
  providers: [PaymentService, 
    LegendService, MarkerService, MapsTooltipService, DataLabelService, BubbleService, NavigationLineService , SelectionService, AnnotationsService, ZoomService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
