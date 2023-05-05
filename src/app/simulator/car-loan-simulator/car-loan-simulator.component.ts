import { Component } from '@angular/core';
import { InvestmentService } from 'src/app/core/service/investment.service';

@Component({
  selector: 'app-car-loan-simulator',
  templateUrl: './car-loan-simulator.component.html',
  styleUrls: ['./car-loan-simulator.component.css']
})
export class CarLoanSimulatorComponent {

  nbrCh!:any
  Vehiclevalue!:any
  Duration!:any
  test:boolean=false
rst!:any
  constructor(private service:InvestmentService){}


  add(form:any){
    console.log(form.value.nbrCh)
  if(form.value.nbrCh =="4 CH"){
    this.rst=( this.Vehiclevalue * 0.2 ) /// this.Duration
    this.test=true
   
  }else if(form.value.nbrCh =="5-8 CH"){
    this.rst=(this.Vehiclevalue * 0.4) /// this.Duration
    this.test=true
  } else {
    this.rst=(this.Vehiclevalue * 0.7) /// this.Duration
    this.test=true
  }

  }
}
