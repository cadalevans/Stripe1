import { Component } from '@angular/core';
import { InvestmentService } from 'src/app/core/service/investment.service';

@Component({
  selector: 'app-debtcapacity',
  templateUrl: './debtcapacity.component.html',
  styleUrls: ['./debtcapacity.component.css']
})
export class DebtcapacityComponent {

  Salary!:any
  existingCredit!:any
  test:boolean=false
rst!:any
  constructor(private service:InvestmentService){}


  add(form:any){
    const a=this.Salary*0.4 -this.existingCredit;
this.rst=a
    this.test=true;
  }
}
