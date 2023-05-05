import { Component } from '@angular/core';
import { RequestService } from 'src/app/core/service/request.service';
import { loan } from 'src/app/core/model/loan';
import { request } from 'src/app/core/model/request';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
//request!: request ;
message:any;
  
listLoans : any; 
listRequests : any; 
form : boolean = false;
 loan!: loan;
 request!:request;
 closeResult! : string;


constructor(private service:RequestService){}
ngOnInit():void{
  
  this.service.getAllRequests().subscribe(res => this.listRequests = res);
}

 deletLoanByIdNow(Loan :loan){
  this.service.deletLoanById(Loan.idLoan).subscribe(res=>{
    let index= this.listLoans.indexOf(Loan);
    this.listLoans.splice(index,1);
  });
 }

}



