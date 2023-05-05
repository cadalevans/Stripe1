import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Maps, Zoom, Marker, NavigationLine } from '@syncfusion/ej2-angular-maps';
import { map } from 'rxjs';
import { BankServiceService } from 'src/app/core/service/bank-service.service';

import 'leaflet-routing-machine';
import { ChartData, ChartOptions } from 'chart.js';


Maps.Inject(Zoom, Marker, NavigationLine);

declare const L: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit{

  constructor(private bankService:BankServiceService){}

  ngOnInit() {
    let mymap = L.map('map');
     
    //--------------------------Get user's Location ---------------------
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
       mymap.setView(latLong, 13);
      //this.watchPosition();
      
    
      // Add a base layer
       var osm= L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    osm.addTo(mymap);
         //leaflet search
         L.Control.geocoder().addTo(mymap);
    
    // Define the circle with center at your current location
    /*const circle = L.circle([36.7230724, 10.3441758], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 5000 // in meters
    }).addTo(mymap);
    */
      let marker = L.marker(latLong).addTo(mymap);
      
      
      // Create an array of coordinates
      const circle1 = L.circle(latLong, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 75 // in meters
      }).addTo(mymap);
      const locations = [ 
       /* [23.7807716,90.3367087],
        [40.4380981,-3.844688],
        [14.5965777,120.9382742],
        [25.0174463,121.3412243],
        [27.7090302,85.2848473],
        [28.527554,77.0438319],
        [-15.7213696,-48.1025118],
        [-16.5205315,-68.2066505],
        [34.7164258, 10.696165],
        [36.7949919,10.060705],
        [36.9145409,10.2901152],
        [36.9455989,8.7276504],
        */
        [36.7230724,10.3441758],//ma localisation actuelle
       
      ];
    
      // Loop through the array and add markers to the map
    
      locations.forEach(location => {
        L.marker(location).addTo(mymap);
        L.circle(location).addTo(mymap)
      });
      
      // Loop through the bank locations and add markers within the circle
     /* locations.forEach(location => {
      const marker = L.marker(location);
      const distance = mymap.distance(circle.getLatLng(), marker.getLatLng());
      if (distance <= circle.getRadius()) {
        marker.addTo(mymap);
      }
    });*/
    // Rooting with Leaflet
    let routingControl: any;
    
    //map click event
    mymap.on('click', function(e: { latlng: any; }) {
    if (routingControl) {
      mymap.removeControl(routingControl);
    }
    
    routingControl = L.Routing.control({
     
         
      showAlternatives: true,
      lineOptions: {styles: [{color: '#242c81', weight: 7}]},
      fitSelectedRoutes: true,
      altLineOptions: {styles: [{color: '#ed6852', weight: 7}]},
    
      routeWhileDragging: true,
      waypoints: [
          L.latLng(latLong),
          e.latlng
      ]
    }).addTo(mymap);
    })
    /*
    L.Routing.control({
      waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
      ]
    }).addTo(mymap);
    */
    
    //--------------------------------------------------
    
      marker.bindPopup('<b>Hi</b>').openPopup();
    
      let popup = L.popup()
        .setLatLng(latLong)
        .setContent('I am Franck')
        .openOn(mymap);
    });
    

     
    
    
     /* watchPosition() {
        let desLat = 0;
        let desLon = 0;
        let id = navigator.geolocation.watchPosition(
          (position) => {
            console.log(
              `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
            );
            if (position.coords.latitude === desLat) {
              navigator.geolocation.clearWatch(id);
            }
          },
          (err) => {
            console.log(err);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      }
    */
    // Add markers for each bank
    this.bankService.getAll().subscribe(banks => {
      banks.forEach(bank => {
        const location = [bank.bank_lat, bank.bank_lng];
        L.marker(location).addTo(mymap).bindPopup(bank.bank_name);
       L.popup()
      .setContent(bank.bank_name)
      
      L.circle(location).addTo(mymap)
      });
    });
   
        
    

  }

  // -------charts-----------//
 
  
  

}
