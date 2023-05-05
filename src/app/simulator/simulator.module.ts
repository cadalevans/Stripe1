import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditComponent } from './credit/credit.component';
import { FormsModule } from '@angular/forms';
import { SimplesimulatorComponent } from './simplesimulator/simplesimulator.component';
import { SimulatorComponent } from '../simulator/simulator.component';
import { SimulatortRoutingModule } from './simulator-routing.module';
import { DebtcapacityComponent } from './debtcapacity/debtcapacity.component';
import { CarLoanSimulatorComponent } from './car-loan-simulator/car-loan-simulator.component';



@NgModule({
  declarations: [
    CreditComponent,
    SimplesimulatorComponent,
    SimulatorComponent,
    DebtcapacityComponent,
    CarLoanSimulatorComponent
  ],
  imports: [
    CommonModule,
    
    SimulatortRoutingModule,
    FormsModule
    
    
    
  ]
})
export class SimulatorModule { }
