import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStat } from '../model/stat.model';
import { Reclamation } from '../model/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private _http: HttpClient) { 
  
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  readonly API_URL = 'http://localhost:8081';



  // affichage des reclamation de chaque user 
  GetUserReclamation(userId: any):Observable<Reclamation[]> {
  return this._http.get<Reclamation[]>("http://localhost:8081/reclamationParUser/"+1)
  }
  

  ajouterreclamationavecFile(formdata:FormData , userid :any) {
    return this._http.post<Reclamation>(
     "http://localhost:8081/addreclamationwithFile/"+1,formdata,
      
     
      
    );
  }
  statReclamation(userid :any) : Observable<UserStat>
  {
    return this._http.get<UserStat>('http://localhost:8081/NumberdereclamationAccepté/'+1);
 
    
  }
    traiterreclamation(reclamation :any , idUser :any) {
    return this._http.put<Reclamation>(
     "http://localhost:8081/updatestatut/"+idUser,reclamation,
      
     this.httpOptions
      
    );
  }
  GetAllReclamation():Observable<Reclamation[]> {
    return this._http.get<Reclamation[]>("http://localhost:8081/affichReclamation")
    }


  accepterreclamation(reclamation :any , idUser :any) {
  return this._http.put<Reclamation>(
   "http://localhost:8081/updatestatutaccepter/"+1,reclamation,
    
   this.httpOptions
    
  );
}

acceptReclamation(id: number, status: string): Observable<Reclamation> {
  
  const url = `${this.API_URL}/updatestatutaccepter/${id}/${status}`;
  return this._http.put<Reclamation>(url, null);
}

  }


