import { Component } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent {

  powers = [4, 5, 6, 7];
fiscalPower: any;
interestRate: any;
creditType:any;
price: any;
basePrice:any
numberOfYears:any

calculateInterestRate() {
  if (this.fiscalPower === 4) {
    this.interestRate = 0.2;
  } else if (this.fiscalPower >= 5 && this.fiscalPower <= 6) {
    this.interestRate = 0.4;
  } else if (this.fiscalPower === 7) {
    this.interestRate = 0.7;
  }
}

calculatePrice() {
  let basePrice:any;
  switch (this.creditType) {
    case 'car':
      basePrice = 15000;
      break;
    case 'house':
      basePrice = 200000;
      break;
    case 'land':
      basePrice = 100000;
      break;
  }
  this.calculateInterestRate();
  const interest = basePrice * this.interestRate;
  const total = basePrice + interest;
  this.price = total / this.numberOfYears;
}
}
