import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { Maps, Zoom, Marker, NavigationLine } from '@syncfusion/ej2-angular-maps';
import { MapsComponent } from './maps/maps.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from '../products/products-routing.module';
import { RecaptchaFormsModule } from 'ng-recaptcha/lib/recaptcha-forms.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { ToastrModule } from 'ngx-toastr/public_api';
import { NgxStripeModule } from 'ngx-stripe/public_api';
import { NgChartsModule } from 'ng2-charts/public_api';
import { RecaptchaModule } from 'ng-recaptcha/lib/recaptcha.module';
import { AppRoutingModule } from '../app-routing.module';
//import { BankComponent } from './bank/bank.component';
Maps.Inject(Zoom, Marker, NavigationLine);


@NgModule({
  declarations: [
    MapsComponent,
    
    
  ],
  imports: [
    CommonModule,
    CommonModule, 
    ProductsRoutingModule,
    FormsModule,
    PaymentRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule,
 
    NgbModalModule,ToastrModule.forRoot(),
    NgxStripeModule.forRoot('cle publique'),
    NgChartsModule,
    
  RecaptchaModule,
    RecaptchaModule,
    FormsModule,
    ReactiveFormsModule,
 
    
    AppRoutingModule,
    
  ]
})
export class PaymentModule implements OnInit{ 
  public zoomSettings!: object;
  public centerPosition!: object;
  public markerSettings!: object;
  public navigationLineSettings!: object;
  public urlTemplate!: string;
  ngOnInit(): void {  this.urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';
  this.zoomSettings = {
      zoomFactor: 4
  };
  this.centerPosition = {
      latitude: 29.394708,
       longitude: -94.954653
  };
   this.markerSettings = [{
       visible: true,
       height: 25,
       width: 15,
       dataSource: [
           {
               latitude: 34.060620,
               longitude: -118.330491,
               name: "California"
           },
           {
               latitude: 40.724546,
               longitude: -73.850344,
               name: "New York"
           }
       ]
   }];
   this.navigationLineSettings = [{
       visible: true,
       color: "blue",
       width: 5,
       angle: 0.1,
       latitude: [34.060620, 40.724546],
       longitude: [-118.330491,-73.850344]
   }];
}
}
