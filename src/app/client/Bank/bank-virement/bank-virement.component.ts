import { Component } from '@angular/core';
import { BankAccountService } from 'src/app/core/service/bank-account.service';

@Component({
  selector: 'app-bank-virement',
  templateUrl: './bank-virement.component.html',
  styleUrls: ['./bank-virement.component.css']
})
export class BankVirementComponent {
  id!: number;
  somme!: number;
  message!: string;

  constructor(private bankAccountService: BankAccountService) { }

  effectuerVirement(): void {
    this.bankAccountService.virement(this.id, this.somme)
      .subscribe((response: string) => {
        this.message = response;
        console.log(response);
      });
  }
 
  retrait(id: number, somme: number) {
    this.bankAccountService.retrait(id, somme).subscribe(
      message => console.log(message),
      error => console.log(error)
    );
  }
}