import { Component, OnInit } from '@angular/core';
import { investment } from 'src/app/core/model/investment';
import { InvestmentService } from 'src/app/core/service/investment.service';
import { TypeInvestment } from 'src/app/type-investment';

@Component({
  selector: 'app-formclient-invest',
  templateUrl: './formclient-invest.component.html',
  styleUrls: ['./formclient-invest.component.css']
})
export class FormclientInvestComponent implements OnInit {

 
  listInvestment : any; 
  form : boolean = false;
   investment!: any;
   closeResult! : string;
   TypeInvestment=TypeInvestment.DEPOSITS;

   constructor(private service:InvestmentService){}
   ngOnInit():void{
  
    this.investment = {
      idInvestment :0,
      investmentMoney :0,
      typeInvestment :this.TypeInvestment
    
    }
   }
    getAllInvestment(){
      this.service.getAllInvestments().subscribe(investment => this.listInvestment = investment);
    }

   addInvestmentnow(Investment:investment ){
    console.log(Investment);
    
    this.service.addInvestment(Investment,1).subscribe((res :investment) => {
      console.log('investment added :' ,res);
      this.getAllInvestment();
      this.form = false;
    });
  }

}
