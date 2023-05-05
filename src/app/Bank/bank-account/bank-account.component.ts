import { Component } from '@angular/core';
import { BankAccountService,BankAccount } from 'src/app/core/service/bank-account.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent {

  account: BankAccount = new BankAccount();

  constructor(private bankAccountService: BankAccountService) {}

  addAccount() {
    this.bankAccountService.addBankAccount(this.account).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  
}