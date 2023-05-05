import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/core/service/request.service';
import { loan } from 'src/app/core/model/loan';
import { PdfService } from 'src/app/core/service/pdf.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
  
})
export class ListClientComponent implements OnInit {
  message:any;
  idLoan:any;
  listLoans : any; 
  form : boolean = false;
   closeResult! : string;
  
  
  constructor(private servicepdf:PdfService ,private service:RequestService,private activatedRoute:ActivatedRoute ){}
  ngOnInit():void{
  
    this.service.getAllLoans().subscribe(res => this.listLoans = res);
  }
  
  generatePdf(loan:any): void {
    this.servicepdf.generatePdf(loan.idLoan).subscribe((pdf: Blob) => {
      const blobUrl = URL.createObjectURL(pdf);
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = 'loan-payments.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  
  
}

