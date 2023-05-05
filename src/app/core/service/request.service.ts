import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loan } from '../model/loan';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  adminhttpOptions:any;
  /*constructor(private httpClient: HttpClient ) {headers: new HttpHeaders({'Authorization':"Bearer"+"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4MjM0NzY1MCwiZXhwIjoxNjgyNDM0MDUwfQ.6TMPzst_zAdf9Zoub2U3a5sCmN7fd0JAcC3oT7HQ_ilJA3DkSy-CcYTGYTiHA49lzHXkvbP0oHD321QFQDCrsA"})};*/
  constructor(private httpClient: HttpClient){
    this.adminhttpOptions ={ 
      headers: new HttpHeaders({
      'Authorization': "Bearer "+  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4Mjk4MDkwMCwiZXhwIjoxNjgzMDY3MzAwfQ.IzPQoXbtuKq9dGHxussX-iSeuaj57M2F6IOrMY-mJ32cJxvtazaSoJmLK_lYzttdvKrNyGYRg8cchZ50f39Mcw"})
     
      };
  }
  public addRequest(request:any){
    return this.httpClient.post("http://localhost:8081/api/RequestLoan/add/1",request,this.httpOptions)
  }
  public getAllRequests(){
    return this.httpClient.get("http://localhost:8081/api/RequestLoan/all",this.adminhttpOptions)
  }
  public getAllLoans(){
    return this.httpClient.get("http://localhost:8081/api/Loan/all",this.adminhttpOptions)
  }

  public deletLoanById(idLoan:number){
    return this.httpClient.delete("http://localhost:8081/api/Loan/delete/"+ idLoan ,this.adminhttpOptions)
  }
 /*public getLoanStats() {
  this.httpClient.get<any>("http://localhost:8081/RequestLoan/loan/stats",this.adminhttpOptions).subscribe(data => {
    // set credit stats data
    this.approvedCount = data.approvedCount;
    this.declinedCount = data.declinedCount;
    // draw credit stats chart
    this.drawCreditStatsChart();
  });
  }*/
  getLoanStats(): Observable<any> {
    return this.httpClient.get<any>("http://localhost:8081/RequestLoan/stats",this.adminhttpOptions);
  }
  getMonthlyPayment(idLoan: number){
    return this.httpClient.get("http://localhost:8081/api/Loan/payments/"+idLoan,this.adminhttpOptions);
  }
 /* sendPaymentReminder(idLoan: number) {
    const url = `${this.baseUrl}/loans/${idLoan}/reminders`;
    return this.http.post<void>(url, null);
}*/
}
