import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterReclamationComponent } from './ajouter-reclamation/ajouter-reclamation.component';
import { ConsulterReclamationComponent } from './consulter-reclamation/consulter-reclamation.component';


const routes: Routes = [
  {
    path: 'reclamer',
    component: AjouterReclamationComponent}
    ,{path: 'consulter',
    component: ConsulterReclamationComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
