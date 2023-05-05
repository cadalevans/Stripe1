import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ChartOptions } from 'chart.js';
import { Reclamation } from '../core/model/reclamation';

import Swal from 'sweetalert2';
import { ReclamationService } from '../core/service/reclamation.service';

@Component({
  selector: 'app-reclamation-admin',
  templateUrl: './reclamation-admin.component.html',
  styleUrls: ['./reclamation-admin.component.css']
})
export class ReclamationAdminComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartColors: Array < any > = [{
    backgroundColor: ['red', 'yellow', 'rgba(148,159,177,0.2)'],
    borderColor: ['rgba(135,206,250,1)', 'rgba(106,90,205,1)', 'rgba(148,159,177,1)']
 }];
  public pieChartLabels = [ 'refused','accepted','in progress'];
  public pieChartDatasets = [ {
    data: [ 3,3,2]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private reclamationService: ReclamationService) {
     this.getTypePercentage();
  }
  reclamations :Reclamation[] | undefined ;
  form : boolean = false;
  ngOnInit(): void {
    this.getallReclamation();
   
  }
  traiterreclamation(reclamation: any){
    this.reclamationService.traiterreclamation(reclamation,1).subscribe((res)=>{
      this.form=false;
      console.log(res);
    });
   // Swal.fire('Bonjour!', 'Votre demande a été envoyée avec succès !', 'success');
  }

  getallReclamation(){
    this.reclamationService.GetAllReclamation() .subscribe((reclamations: Reclamation[]) => {
      this.reclamations= reclamations;
   });
  }

  accepterReclamation(id: any){
    this.reclamationService.acceptReclamation(id,"Accepte").subscribe((res)=>{
      console.log(res);
      this.ngOnInit()
    });
    Swal.fire('Well!', 'Your claim was approved !', 'success');
  }

  refuserReclamation(id: any){
    this.reclamationService.acceptReclamation(id,"Refuser").subscribe((res)=>{
      console.log(res);
      this.ngOnInit()
    });
    Swal.fire('Oppps!', 'Your claim was refused !', 'warning');
  }

  getTypePercentage() {
    console.log("first",this.pieChartDatasets)
   
    this.reclamationService.statReclamation(1).subscribe(
      (d) => {
        console.log("d", d.refus,d.accepté, d.encore);
        const success = d.accepté;
        const refus = d.refus;
        const encore = d.encore;
        this.pieChartDatasets = [{
          data: [ refus,success, encore]
        }];
      },
      (error) => {
        console.error("Error while fetching stats:", error);
      }
    );
     
      }
    
     
      }
  

