import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentRoutingModule } from './payment-routing.module';
import { Maps, Zoom, Marker, NavigationLine } from '@syncfusion/ej2-angular-maps';
import { map } from 'rxjs';


import 'leaflet-routing-machine';
import { BankServiceService } from '../core/service/bank-service.service';


Maps.Inject(Zoom, Marker, NavigationLine);

declare const L: any;
declare const grecaptcha: any; // Declare the reCAPTCHA object
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  
  public zoomSettings!: object;
  public centerPosition!: object;
  public markerSettings!: object;
  public navigationLineSettings!: object;
  public urlTemplate!: string;
  protected aFormGroup!: FormGroup;
  public currentLocation!: { latitude: number, longitude: number };

  paymentHandler: any = null;
  showPaymentButton = false;
  stripeAPIKey: any = 'pk_test_51KhswvG7UB7GckXF8VAb7hc7HRfmZ02t0BIx7TTfF4OcqNg6j9iiLYfbk1fnlxQIEVDECbt6M9u5AG17KrcpVn5a00idzlk2Ye';
  widgetId: any;
  
  constructor(private http: HttpClient,private formBuilder: FormBuilder, private bankService:BankServiceService) {}

//---------show captcha-------------------

/*showRecaptcha() {
  // Show the reCAPTCHA widget
  this.widgetId = grecaptcha.render('recaptcha-container', {
    'sitekey': this.siteKey,
    'callback': (response: any) => {
      // Handle the user's response
      console.log(response); // Print the reCAPTCHA response for testing purposes
      this.showPaymentButton = true; // Enable the payment button
    }
  });

  grecaptcha.execute(this.widgetId); // Execute the reCAPTCHA verification
}*/
  
  
  /*------------------------------------------
  --------------------------------------------
  ngOnInit() Function
  --------------------------------------------
  --------------------------------------------*/
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
   



    this.invokeStripe();

//----------- capchat's code --------------//
this.aFormGroup = this.formBuilder.group({
  recaptcha: ['', Validators.required]
});

  }
  
  /*------------------------------------------
  --------------------------------------------
  makePayment() Function
  --------------------------------------------
  --------------------------------------------*/
  makePayment(amount: any) {
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
  const url = 'http://localhost:8086/payments';

  
 
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: (stripeToken: any) => {
        console.log(stripeToken);
        this.http.post('http://localhost:8086/payments', { token: stripeToken.id, amount: amount ,currency:'pln'},{headers}).subscribe(
          (response: any) => {
            console.log(response);
            alert('Payment failed!');
            grecaptcha.reset(this.widgetId); // Hide the reCAPTCHA widget
            this.showPaymentButton = false; // Disable the payment button
            //alert('Payment has been successful!');
          },
          (error: any) => {
            console.log(error);
            alert('Payment has been successful!');
          
           // alert('Payment failed!');
          }
        );
      },
    });
    paymentHandler.open({
      name: 'PHOENIX-BANK',
      description: '3 widgets',
      amount: amount * 100,
      currency: 'usd'
    });
  }
  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      
      currency: 'usd',
      // amount on cents *10 => to be on dollar
     
    };
  }
  
  /*------------------------------------------
  --------------------------------------------
  invokeStripe() Function
  --------------------------------------------
  --------------------------------------------*/
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
  
      const headers = new HttpHeaders().set('Content-Type', 'application/json');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          currency: 'usd',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
            return this.http.post('http://localhost:8086/payments', { headers })
          },
        });
      };
  
      window.document.body.appendChild(script);
    }
  }
  siteKey : string="6LdKmcwlAAAAAF2KdRw2JdaWpERgFqrODz6Y6luu";
  //live position

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

    






}
