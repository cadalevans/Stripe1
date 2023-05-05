import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/core/model/bank';

import { BankServiceService } from 'src/app/core/service/bank-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  banks: Bank[] = [];
  bank: Bank = new Bank("", "", "", "", 0, 0, 0);
  message: any;

  constructor(private bankService: BankServiceService) { }

  ngOnInit(): void {
    this.getAllBanks();
  }

  public getAllBanks() {
    this.bankService.getAll().subscribe(
      (data) => {
        this.banks = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public getBankById(id: string) {
    this.bankService.getById(id).subscribe(
      (data) => {
        this.bank = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public createBank() {
    let resp=this.bankService.create(this.bank);
    resp.subscribe((data)=>this.message=data);
    
  }

  public updateBank(id: string) {
    this.bankService.update(id, this.bank).subscribe(
      (data) => {
        this.message = "Bank updated successfully";
        this.bank = new Bank("", "", "", "", 0, 0, 0);
        this.getAllBanks();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
