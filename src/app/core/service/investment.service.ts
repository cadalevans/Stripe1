import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { investment } from '../model/investment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  readonly API_URL = '';
  adminhttpOptions:any;

  /*constructor(private httpClient: HttpClient ) {headers: new HttpHeaders({'Authorization':"Bearer"+"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4MjM0NzY1MCwiZXhwIjoxNjgyNDM0MDUwfQ.6TMPzst_zAdf9Zoub2U3a5sCmN7fd0JAcC3oT7HQ_ilJA3DkSy-CcYTGYTiHA49lzHXkvbP0oHD321QFQDCrsA"})};*/
  constructor(private httpClient: HttpClient){
    this.adminhttpOptions ={ 
      headers: new HttpHeaders({
      'Authorization': "Bearer "+  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4MjYxNzM5NiwiZXhwIjoxNjgyNzAzNzk2fQ.uhCkxsxYZngkRmWwJ-TWF8GcJyQi2EAygRl7Y4Y6ALV5cdqFHm9PRg4T_dMIRCDm6AiqNb7L4N_A9lO3zItgMg"})

      };
  }
 
 
  getAllInvestments() {
    return this.httpClient.get<[investment]>('http://localhost:8081/api/investor/retrieveInvestment');
  }
  public deletinvestmentById(idInvestment:number){
    return this.httpClient.delete("http://localhost:8081/api/investor/deleteInvestment/"+ idInvestment ,this.adminhttpOptions)
  } 
  public validatinginvestment(idInvestment:number){
    return this.httpClient.post("http://localhost:8081/api/investor/ValidateInvestment/"+ idInvestment ,this.adminhttpOptions)
  } 
  updateInvestment(investment : investment){
    return this.httpClient.patch("http://localhost:8081/investor/updateInvestment/",investment);

  }

  addInvestment(investment : any,idUser:any):Observable<investment>{
    return this.httpClient.post<investment>("http://localhost:8081/api/investor/addInvestment/"+`${idUser}`,investment);
  }


  getnOrmalSimulator(sim:any) {
    return this.httpClient.get<[Number]>('http://localhost:8081/api/simulator/normalSimulator',sim);
  }
}

