import { Component } from '@angular/core';

@Component({
  selector: 'app-earning',
  templateUrl: './earning.component.html',
  styleUrls: ['./earning.component.css']
})
export class EarningComponent {

  investmentAmount!: any;
  interestRate!: any;
  investmentPeriod!: any;
  monthlyEarnings!: any;
  totalIncome!: any;
  duration:any
  investmentMoney: any;
  profit: any;
  //investmentMoney: any;

  calculate() {
    const monthlyInterestRate = this.investmentAmount / 10;
    const duration = this.investmentAmount + (monthlyInterestRate* this.investmentPeriod * 12);
    this.monthlyEarnings = monthlyInterestRate;
    //this.totalIncome = this.monthlyEarnings*this.investmentPeriod*12;
  }
}
