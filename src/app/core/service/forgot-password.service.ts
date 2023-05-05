import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

 
  private baseUrl = 'http://localhost:8081/api/users';

  constructor(private http: HttpClient) { }

  forgotPassword(email: string): Observable<any> {
    const body = { email: email };
    return this.http.post(`${this.baseUrl}/forgot-password`, body);
  }

  private resetPasswordUrl = 'http://localhost:8081/api/users/reset-password';

  resetPassword(resetPassRequest: any): Observable<any> {
    return this.http.post(this.resetPasswordUrl, resetPassRequest);
  }

}





