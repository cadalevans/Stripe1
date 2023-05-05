import { Component } from '@angular/core';
import { InvestmentService } from 'src/app/core/service/investment.service';

@Component({
  selector: 'app-simplesimulator',
  templateUrl: './simplesimulator.component.html',
  styleUrls: ['./simplesimulator.component.css']
})
export class SimplesimulatorComponent {

  pa!:any
  test:boolean=false
  duration!:any
  creditAmount!:any
  constructor(private service:InvestmentService){}


  add(form:any){
    let body={
      
      "credit" : this.creditAmount,
      "period" :this.duration,
    }
    console.log(body)
   
    console.log(form.value)
    const a=JSON.stringify(body);

    const result = (this.creditAmount + (this.creditAmount * 0.22)) / this.duration;

    this.pa=result;
  //this.service.getnOrmalSimulator(body).subscribe(res=> this.pa=res)
this.test=true

  }


}
