import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface MyProfile {
  firstName: string;
  lastName: string;
  email: string;
  numTel: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl = 'http://localhost:8081/api/users';

  constructor(private http: HttpClient) { }

  updateUser(updatedUser: any, password: string) {
    const url = 'http://localhost:8081/api/users/modifieruser?password=' + password;
    return this.http.put(url, updatedUser);
  }

  getMyProfile(): Observable<MyProfile> {
    return this.http.get<MyProfile>(`${this.baseUrl}/MyProfile`);
  }
  
  private apiUrl2 = 'http://localhost:8081/api/adminEsprit';

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl2}/AllUser`);
  }


  private statistiqueUrl = 'http://localhost:8081/api/adminEsprit/Statistique';
  getUserRoleStats(): Observable<any> {
    return this.http.get<any>(this.statistiqueUrl);
  }

  private readonly apiUrl3 = 'http://localhost:8081/api/users';
  deleteUser(currentPassword: string): Observable<any> {
    const url = `${this.apiUrl3}/Delete?currentPassword=${currentPassword}`;
    return this.http.delete(url);
  }


}

export interface User {
  idUser: number;
  username: string;
  lastName: string;
  firstName:string
  email: string;
  birthDate:Date;
}
