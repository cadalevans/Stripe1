import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/core/model/reclamation';
import { UserStat } from 'src/app/core/model/stat.model';
import { ReclamationService } from 'src/app/core/service/reclamation.service';

@Component({
  selector: 'app-consulter-reclamation',
  templateUrl: './consulter-reclamation.component.html',
  styleUrls: ['./consulter-reclamation.component.css']
})
export class ConsulterReclamationComponent implements OnInit {

  constructor(private reclamationService: ReclamationService) { }
 

  reclamations :Reclamation[] | undefined ;
  statsuser :UserStat[] | undefined;

  ngOnInit(): void {
    this.getReclamationParIdUser();

  }

     //get reclamation by id (les reclamation de chaque user) 
  
getReclamationParIdUser(){
  this.reclamationService.GetUserReclamation(1) .subscribe((reclamations: Reclamation[]) => {
    this.reclamations= reclamations;
   
 });
}


}

