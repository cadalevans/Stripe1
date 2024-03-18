import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { RecaptchaComponent } from 'ng-recaptcha';
import { Maps, Zoom, Marker, NavigationLine } from '@syncfusion/ej2-angular-maps';
Maps.Inject(Zoom, Marker, NavigationLine);

import * as K from 'leaflet';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
declare const L:any


export interface FormModel {
  captcha?: string;
}



declare const grecaptcha: any; // Declare the reCAPTCHA object
@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent {
  

    //_--------------------------------------------------------------------------------------------------


    paymentHandler: any = null;
  showPaymentButton = false;
  stripeAPIKey: any = 'pk_test_51KhswvG7UB7GckXF8VAb7hc7HRfmZ02t0BIx7TTfF4OcqNg6j9iiLYfbk1fnlxQIEVDECbt6M9u5AG17KrcpVn5a00idzlk2Ye';
  widgetId: any;
 
  protected aFormGroup!: FormGroup;
  captchaResponse: string = '';
  captchaElem: any;
  recaptchaV2Service: any;


  
  constructor(private http: HttpClient,private formBuilder: FormBuilder) {}


  onSubmit() {
    if (this.aFormGroup.valid) {
      this.recaptchaV2Service.execute(this['captchaElem']).subscribe((response: string) => {
        this.captchaResponse = response;
        // Send the captchaResponse value to the server for validation
      });
    }
  }
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

     
//--------------------------Get user's Location ---------------------






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
    //----------- capchat's code --------------//
this.aFormGroup = this.formBuilder.group({
  recaptcha: ['', Validators.required]
});
  }
  siteKey : string="6LdKmcwlAAAAAF2KdRw2JdaWpERgFqrODz6Y6luu";
 






}
