import { Component } from '@angular/core';
import { BankAccountService } from 'src/app/core/service/bank-account.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  idEnv!: number;
  idRec!: number;
  somme!: number;
  
  constructor(private bankAccountService: BankAccountService) { }

  transaction() {
    this.bankAccountService.transaction(this.idEnv, this.idRec, this.somme).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
}
