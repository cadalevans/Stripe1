import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BankAccountService,BankAccount } from 'src/app/core/service/bank-account.service';

@Component({
  selector: 'app-all-compte',
  templateUrl: './all-compte.component.html',
  styleUrls: ['./all-compte.component.css']
})
export class AllCompteComponent {
 
  bankAccounts: BankAccount[];

  constructor(private bankAccountService: BankAccountService, private router:Router) {
    this.bankAccounts = [];

   }

  ngOnInit(): void {
    this.bankAccountService.getAllBankAccounts().subscribe(
      (data) => {
        this.bankAccounts = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteBankAccount(id: number) {
    this.bankAccountService.deleteBankAccount(id).subscribe(
      (data) => {
        console.log(data);
        this.bankAccounts = this.bankAccounts.filter((account) => account.idBankAccount !== id);
        //this.router.navigateByUrl('/admin/Dashbord'); /admin/allCompte
        this.router.navigateByUrl('/admin/allCompte');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

