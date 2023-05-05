import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../model/bank';

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {

  private apiUrl =  'http://localhost:8080/ba/Banks';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Bank[]> {
    return this.http.get<Bank[]>("http://localhost:8080/ba/getBank");
  }

  public getById(id: string): Observable<Bank> {
    return this.http.get<Bank>(`${this.apiUrl}/${id}`);
  }

  public create(bank: any) {
    return this.http.post(this.apiUrl, bank,{responseType:'text' as 'json'});
  }

  public update(id: string, bank: Bank): Observable<Bank> {
    return this.http.put<Bank>(`${this.apiUrl}/${id}`, bank);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Ajoutez d'autres méthodes pour d'autres opérations CRUD
}

