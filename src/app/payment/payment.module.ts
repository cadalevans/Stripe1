import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { Maps, Zoom, Marker, NavigationLine } from '@syncfusion/ej2-angular-maps';
import { MapsComponent } from './maps/maps.component';
import { BankComponent } from './bank/bank.component';
import { FormsModule } from '@angular/forms';
//import { BankComponent } from './bank/bank.component';
Maps.Inject(Zoom, Marker, NavigationLine);


@NgModule({
  declarations: [
    MapsComponent,
    
    
  ],
  imports: [
    CommonModule,
    
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
