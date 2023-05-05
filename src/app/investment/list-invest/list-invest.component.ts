import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { investment } from 'src/app/core/model/investment';
import { InvestmentService } from 'src/app/core/service/investment.service';

@Component({
  selector: 'app-list-invest',
  templateUrl: './list-invest.component.html',
  styleUrls: ['./list-invest.component.css']
})
export class ListInvestComponent implements OnInit {

  listinvestment : any; 
form : boolean = false;
 investment!: investment;
 closeResult! : string;
 formG: FormGroup;

 constructor(private x:InvestmentService, private fb: FormBuilder){
  this.formG = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    // add more form fields as needed
  });
 }
ngOnInit():void{
  this.x.getAllInvestments().subscribe(res => this.listinvestment = res);

}

deletInvestmentByIdNow(investment :any){
  this.x.deletinvestmentById(investment).subscribe(res=>{
   // let index= this.listinvestment.indexOf(investment);
   // this.listinvestment.splice(index,1);
  });
  window.location.reload();

 }

 validateInvestment(id:any){
  this.x.validatinginvestment(id).subscribe();
  window.location.reload();
 }


//  updateById(investment :investment){
//   this.service.deletinvestmentById(investment.idInvestment).subscribe(res=>{
//     let index= this.listinvestment.indexOf(investment);
//     this.listinvestment.splice(index,1);
//   });
//  }
 

/*openForm() {
  const width = 500;
  const height = 500;
  const left = (window.innerWidth / 2) - (width / 2);
  const top = (window.innerHeight / 2) - (height / 2);
  const options = `width=${width},height=${height},top=${top},left=${left},modal=yes,alwaysRaised=yes`;

  const formHtml = this.formTemplate.nativeElement.innerHTML;
  const popup = window.open('', 'My Form', options);
  popup.document.write(formHtml);
  popup.document.close();
}*/

}
