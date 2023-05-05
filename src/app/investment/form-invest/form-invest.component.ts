import { Component, OnInit } from '@angular/core';
import { investment } from 'src/app/core/model/investment';
import { InvestmentService } from 'src/app/core/service/investment.service';

@Component({
  selector: 'app-form-invest',
  templateUrl: './form-invest.component.html',
  styleUrls: ['./form-invest.component.css']
})
export class FormInvestComponent implements OnInit {

 
  listInvestment : any; 
  form : boolean = false;
   investment!: any;
   closeResult! : string;
   ingnvestment:any

   investmentMoney:any
   typeInvestment:any
   constructor(private service:InvestmentService){}
   ngOnInit():void{

 
    
    }
   
    /*  getAllInvestment(){
      this.service.getAllInvestments().subscribe(investment => this.listInvestment = investment);
    }*/

   addInvestmentnow(form:any){
    let body={
      "investmentMoney" : this.investmentMoney,
      "typeInvestment" :this.typeInvestment
    }
    console.log(body)
    this.service.addInvestment(body,1).subscribe((res :investment) => {
      console.log('investment added :' ,res);
      //this.getAllInvestment();
      this.form = false;
    });
  }

}
