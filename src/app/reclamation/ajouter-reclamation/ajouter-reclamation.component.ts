import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/core/model/reclamation'; 
import { ReclamationService } from 'src/app/core/service/reclamation.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-reclamation',
  templateUrl: './ajouter-reclamation.component.html',
  styleUrls: ['./ajouter-reclamation.component.css']
})
export class AjouterReclamationComponent implements OnInit  {

  
  

  constructor(private reclamationService: ReclamationService, private router: Router,private _formBuilder: FormBuilder
  ) { }
// bread crumb items
files: File[] = [];



form : boolean = false;

reclamation!: Reclamation ;

  ngOnInit(): void {
    this.reclamation = {
      complaintId: null,
      nomReclamation: undefined,
      description: undefined,
      statutReclamation: null
    }
    
  }


  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);  
    }
  
  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  ajouterreclamationavecFile(){
    const formData = new  FormData();
    for (var i = 0; i < this.files.length; i++) {   
      formData.append("file[]", this.files[i]);  
    }
    formData.append("Recla",JSON.stringify(this.reclamation))  ;

    this.reclamationService.ajouterreclamationavecFile(formData,1).subscribe(
      (res) => {
        this.form = false;
        console.log(res);
        Swal.fire('Success!', 'Your request was sent successfully!', 'success');
      },
      (error) => {
        Swal.fire('Error!', 'An error occurred while sending your request.', 'error');
      }
    );
  }

}



