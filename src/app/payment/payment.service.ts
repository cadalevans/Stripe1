import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const cabecera ={headers: new HttpHeaders({'content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  stripeURL = 'http://localhost:8080/stripe/payments';
  
  apiUrl = 'http://localhost:8086';
  constructor(private http: HttpClient) { }

  getBanks() {
    return this.http.get(`${this.apiUrl}/banks`);
  }
}


