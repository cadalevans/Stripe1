import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditComponent } from './credit/credit.component';
import { SimulatorModule } from './simulator.module';
import { SimplesimulatorComponent } from './simplesimulator/simplesimulator.component';
import { SimulatorComponent } from './simulator.component';
import { DebtcapacityComponent } from './debtcapacity/debtcapacity.component';
import { CarLoanSimulatorComponent } from './car-loan-simulator/car-loan-simulator.component';



const routes: Routes = [{ path : '', component:SimulatorComponent, children:[
  { path: 'credit', component: CreditComponent },
  { path: 'simplesmimulator', component: SimplesimulatorComponent },
  { path: 'debtCapacity', component: DebtcapacityComponent },
  { path: 'carLoanSimulator', component: CarLoanSimulatorComponent },
]}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulatortRoutingModule { }
