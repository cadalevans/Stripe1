import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { RecaptchaComponent } from 'ng-recaptcha';
import { Maps, Zoom, Marker, NavigationLine } from '@syncfusion/ej2-angular-maps';
Maps.Inject(Zoom, Marker, NavigationLine);
import * as K from 'leaflet';

import { HttpClient } from '@angular/common/http';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
declare const L:any


export interface FormModel {
  captcha?: string;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css',
  ]
})
export class MenuComponent implements OnInit {
  [x: string]: any;
  public currentLocation!: { latitude: number, longitude: number };
  public zoomSettings!: object;
  public centerPosition!: object;
  public markerSettings!: object;
  public navigationLineSettings!: object;
  public urlTemplate!: string;

  protected aFormGroup!: FormGroup;
  captchaResponse: string = '';

  constructor(private http: HttpClient ,private formBuilder: FormBuilder, ) {
  }
  onSubmit() {
    if (this.aFormGroup.valid) {
      this['recaptchaV2Service'].execute(this['captchaElem']).subscribe((response: string) => {
        this.captchaResponse = response;
        // Send the captchaResponse value to the server for validation
      });
    }
  }


  public formModel: FormModel = {};
  ngOnInit():void {
    
   
    //--- Getting user's location with geolocation  ----
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.latitude}`
      );
      let mymap = L.map('map').setView(latLong, 13);

      this.markerSettings = [{
        visible: true,
        height: 20,
        width: 15,
        fill: 'green',
        dataSource: [
            {
                latitude: position.coords.latitude,
                longitude: position.coords.latitude,
                name: "Africa Mall"
            }]
          }]

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);


//

      let marker = L.marker(latLong).addTo(mymap);

      marker.bindPopup('<b>Hi</b>').openPopup();

      let popup = L.popup()
        .setLatLng(latLong)
        .setContent('I am Subrat')
        .openOn(mymap);
    });
    this.watchPosition();
    
    // begin    

 
  

  
    //----- Open street Map-------
    this.urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png?apikey=ORg4AjUWIQA/Gnt2VFhhQlJBfVpdXmJWfFN0RnNadVp3fldFcC0sT3RfQF5jTH5SdkBjUXtXdHddRg==';
           this.zoomSettings = {
              enable: true,
              minZoom:1,
              maxZoom:22,
              toolbars: ["Zoom", "ZoomIn", "ZoomOut", "Pan", "Reset"]
              
           };
           this.centerPosition = {
            latitude: 29.394708,
             longitude: -94.954653
        };
         this.markerSettings = [{
             visible: true,
             height: 20,
             width: 15,
             fill: 'green',
             dataSource: [
                 {
                     latitude: 36.8586673,
                     longitude: 10.1789406,
                     name: "Africa Mall"
                 },
                 
                 {
                  latitude: 36.8594076,
                  longitude: 10.1835612,
                  name: "Tunisie Telecom Borj Louzir"
              },
              {
                latitude: 35.7613735,
                longitude: 10.5859595,
                name: "Messadine Sousse "
            },
            {
              latitude: 34.7929315,
              longitude: 10.083062,
              name: "kairouan Lycée pilote "
          },
            
            {
              latitude: 35.6557366,
              longitude: 10.1835612,
              name: "Tunisie Telecom Borj Louzir"
          },
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

         

   /* if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const radius = 10; // in kilometers

        this.http.get<Location[]>('/api/banks/nearby', {
          params: { latitude, longitude, radius }
        }).subscribe(data => {
          this.banks = data;
          this['showMap']();
        });
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
    */

    this.aFormGroup = this.formBuilder.group({
      recaptchaResponse: ['', Validators.required],
      // Add other form fields here
    });

    // Initialize reCAPTCHA widget
    grecaptcha.ready(() => {
      grecaptcha.execute(this.siteKey, { action: 'submit' }).then((token: string) => {
        this.aFormGroup.patchValue({ recaptchaResponse: token });
      });
    });

     //----------- capchat's code --------------//
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  

   //----------- chatbot's code --------------//
   (function (d, m) {
    var kommunicateSettings = {
      appId: "2ce8316d9f439d5a7b89f2a8afc55e5af",
      popupWidget: true,
      automaticChatOpenOnNavigation: true,
    };
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0];
    h.appendChild(s);
    (window as any).kommunicate = m;
    m._globals = kommunicateSettings;
  })(document, (window as any).kommunicate || {});
  //----------- chatbot's code end --------------//

  }
siteKey : string="6LdaB8slAAAAADEbBX7bJxGN0tN-zoHVXcaqfyiO";

//------- open street map ---------------

//------- watch user's position ----------
watchPosition() {
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

//--------------- google map ---------------

@ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
    center: google.maps.LatLngLiteral = {
        lat: 24,
        lng: 12
    };
    markerPositions: google.maps.LatLngLiteral[] = [];
    zoom = 4;
    addMarker(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
    }
    openInfoWindow(marker: MapMarker) {
        if (this.infoWindow != undefined) this.infoWindow.open(marker);
    }
    markerPosition: google.maps.LatLngLiteral = {
      lat: 37.7749,
      lng: -122.4194
    };
    
    /*
    getCurrentLocation() {
      this.geolocationService.getCurrentPosition().subscribe((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
      });
    }
    */


    apiUrl = 'http://localhost:8086';

    getBanks() {
      return this.http.get(`${this.apiUrl}/banks`);
    }
  


    initializeMap(): void {
      let mymap = L.map(this['mapElement'].nativeElement).setView([51.505, -0.09], 13);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18
      }).addTo(mymap);
  
      mymap.on('click', (e: K.LeafletMouseEvent) => {
        const container = L.DomUtil.create('div');
        const startBtn = this.createButton('Start from this location', container);
        const destBtn = this.createButton('Go to this location', container);
  
        L.popup()
          .setContent(container)
          .setLatLng(e.latlng)
          .openOn(mymap);
  
        L.DomEvent.on(startBtn, 'click', () => {
          control.spliceWaypoints(0, 1, e.latlng);
          mymap.closePopup();
        });
  
        L.DomEvent.on(destBtn, 'click', () => {
          control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
          mymap.closePopup();
        });
      });
  
      const ReversablePlan = L.Routing.Plan.extend({
        createGeocoders: function() {
          const container = L.Routing.Plan.prototype.createGeocoders.call(this);
          const reverseButton = this.createButton('↑↓', container);
          return container;
        }
      });
  
      const plan = new ReversablePlan([
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
      ], {
        geocoder: L.Control.Geocoder.nominatim(),
        routeWhileDragging: true
      });
  
      const control = L.Routing.control({
        routeWhileDragging: true,
        plan: plan
      }).addTo(mymap);
    }
  
    createButton(label: string, container: HTMLElement): HTMLButtonElement {
      const btn = L.DomUtil.create('button', '', container) as HTMLButtonElement;
      btn.setAttribute('type', 'button');
      btn.innerHTML = label;
      return btn;
    }

}
