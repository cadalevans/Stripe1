import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/core/service/request.service';
import { request } from 'src/app/core/model/request';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const interestRate=22;
@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit{

  amountRequired:number=0;
  term_loan:number=0;
  income:number=0;
  curCredits:boolean = false;
  projectSection:string='';
  projectDesc:string='';


  request!: request ;
  message:any;
  
  /*request={    amountRequired :0,
    term_loan :0,
    income:0,
    curCredits:false,
    projectSection:'',
    projectDesc:''}*/

  constructor(private service:RequestService ,private router:Router){}
  ngOnInit():void{
    this.request=new request();
  }
  
  public addrequestnow(addrequestForm:NgForm): void {
    if(addrequestForm.valid){
      this.request.amountRequired = this.amountRequired;
      this.request.term_loan = this.term_loan;
      this.request.income = this.income;
      this.request.curCredits = this.curCredits;
      this.request.projectSection = this.projectSection;
      this.request.projectDesc = this.projectDesc;
      this.request.interestRate=interestRate	;
      
    this.service.addRequest(this.request).subscribe(response => {
      console.log("valid request sended");
   });
    }
    console.log(this.request);
    
  }


}


