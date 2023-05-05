import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  private baseUrl = 'http://localhost:8081/api/Account'; // Assurez-vous que l'URL de base correspond à votre configuration serveur

  constructor(private http: HttpClient) { }

  addBankAccount(account: BankAccount): Observable<BankAccount> {
    return this.http.post<BankAccount>(`${this.baseUrl}/add`, account);
  }

  private apiUrl = 'http://localhost:8081/api/Account/verse/';

  virement(id: number, somme: number): Observable<string> {
    const url = `${this.apiUrl}${id}?somme=${somme}`;
    return this.http.put(url, null, { responseType: 'text' });
  }

  retrait(id: number, somme: number) {
    const url = `http://localhost:8081/api/Account/retrait/${id}?somme=${somme}`;
    return this.http.put(url, {});
  }

  transaction(idEnv: number, idRec: number, somme: number) {
    const url = `http://localhost:8081/api/Account/verse/${idEnv}/${idRec}?somme=${somme}`;
    return this.http.put(url, {});
  }
  
  getAllBankAccounts(): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>('http://localhost:8081/api/Account/show');
  }

  deleteBankAccount(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8081/api/Account/delete/${id}`);
  }
}
export class BankAccount {
  idBankAccount!: number;
  rib!: number;
  balance!: number;
  cin!: number;
}