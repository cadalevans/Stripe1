import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation.component';
import { AjouterReclamationComponent } from './ajouter-reclamation/ajouter-reclamation.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { ConsulterReclamationComponent } from './consulter-reclamation/consulter-reclamation.component';


@NgModule({
  declarations: [
    ReclamationComponent,
    AjouterReclamationComponent,
    ConsulterReclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    NgxDropzoneModule,
    FormsModule,
  ]
})
export class ReclamationModule { }
