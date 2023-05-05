import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/core/service/request.service';
import { request } from '../../core/model/request';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   //request!: request ;
   message:any;
  
   request={ amountRequired:0,
    term_loan:0,
     income:0,
     curCredits:false}
   constructor(private service:RequestService){}
   ngOnInit():void{
     this.request=new request();
   }
   
   public addRequestnow(){
     this.request.curCredits=false;
 
 
     this.service.addRequest(this.request).subscribe(()=>console.log("here"));
   }

   
  

}
