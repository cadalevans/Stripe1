import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/core/service/request.service';

@Component({
  selector: 'app-listpayment',
  templateUrl: './listpayment.component.html',
  styleUrls: ['./listpayment.component.css']
})
export class ListpaymentComponent implements OnInit{

  listPayment!:any;
  constructor(private service:RequestService ,private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
 let idLoan = this.activatedRoute.snapshot.params['idLoan'];
    this.service.getMonthlyPayment(idLoan).subscribe(res=>this.listPayment=res)
  }

}
